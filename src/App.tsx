import axios, { AxiosResponse } from 'axios';
import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

import Company, { CompanyItem } from './Company';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Hero from './Hero';

const COMPANIES_URL: string =
    'https://script.google.com/macros/s/AKfycbyOiJExZRtg3ZSF3_7U8t5uCH2CEWTxSvYLjVyRMhskCwluOTDd/exec';

const categories = [
    'Ristorante e Pizzerie',
    'Bar e Panini',
    'Pasticcerie e Gelaterie',
    'Fiori e Giardinaggio',
    'Cartoleria',
    'Macellerie, Pescherie e Salumerie',
    'Supermercati e Alimentari',
    'Panifici',
    'Librerie, Cartolibrerie e Fumetterie',
    'Farmacie ed Erboristerie',
    'Articoli per la casa',
    'Bevande ed alcolici',
    'Giocattoli',
    'Tabacchi',
];

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

    private renderFilter(): React.ReactNode {
        return (
            <DropdownButton
                id="dropdown-basic-button"
                title={
                    <>
                        <i className="fas fa-fw fa-filter"></i>{' '}
                        {this.state.category ?? 'Tutto'}
                    </>
                }
                variant="light"
                onSelect={(category: string | null) =>
                    this.setState({ category })
                }
            >
                <Dropdown.Item eventKey={undefined}>Tutto</Dropdown.Item>
                {categories.map((category: string) => (
                    <Dropdown.Item eventKey={category}>
                        {category}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        );
    }

    private renderCompanies(): React.ReactNode {
        return (
            <CardColumns>
                {this.state.companies
                    .filter(
                        (company: CompanyItem) =>
                            this.state.category == null ||
                            this.state.category === company.category
                    )
                    .map((company: CompanyItem) => (
                        <Company key={company.name} {...company} />
                    ))}
            </CardColumns>
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
                <div className="text-right">{this.renderFilter()}</div>
                <hr />
                {this.renderCompanies()}
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
