import axios, { AxiosResponse } from 'axios';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Container from 'react-bootstrap/Container';

import { CompanyItem } from './Company';
import Categories from './Categories';
import Companies from './Companies';
import Hero from './Hero';

const COMPANIES_URL: string =
    'https://script.google.com/macros/s/AKfycbyOiJExZRtg3ZSF3_7U8t5uCH2CEWTxSvYLjVyRMhskCwluOTDd/exec';

export interface CompaniesState {
    companies: CompanyItem[];
    category: string | null;
    isLoading: boolean;
    error: { message: string } | null;
}

export default class App extends React.Component<{}, CompaniesState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            companies: [],
            category: null,
            isLoading: true,
            error: null,
        };
    }

    public componentDidMount() {
        this.setState({ isLoading: true });
        axios
            .get(COMPANIES_URL)
            .then((response: AxiosResponse<CompanyItem[]>) =>
                this.setState({
                    companies: response.data,
                    isLoading: false,
                })
            )
            .catch((error) =>
                this.setState({
                    error,
                    isLoading: false,
                })
            );
    }

    private renderContent(): React.ReactNode {
        const { isLoading, error } = this.state;

        if (error != null) {
            return <p>{error.message}</p>;
        }

        if (isLoading === true) {
            return <div className="text-center">Loading...</div>;
        }

        return (
            <div>
                <div className="text-right">
                    <Categories
                        category={this.state.category}
                        onSelect={(category: string | null) =>
                            this.setState({ category })
                        }
                    />
                </div>
                <hr />
                <Companies
                    companies={this.state.companies.filter(
                        (company: CompanyItem) =>
                            this.state.category == null ||
                            this.state.category === company.category
                    )}
                />
            </div>
        );
    }

    public render(): React.ReactNode {
        return (
            <div className="App">
                <Hero />
                <Container>{this.renderContent()}</Container>
                <CookieConsent
                    buttonText="Ok!"
                    style={{ backgroundColor: '#343a40' }}
                    buttonStyle={{ backgroundColor: 'gold' }}
                >
                    Il sito utilizza cookie per migliorarne l'esperienza di
                    navigazione.
                </CookieConsent>
            </div>
        );
    }
}
