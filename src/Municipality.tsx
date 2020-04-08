import axios, { AxiosResponse } from 'axios';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { RouteComponentProps } from 'react-router-dom';

import { CompanyItem } from './Company';
import Categories from './Categories';
import Companies from './Companies';
import { MunicipalitiesContext } from './Context';
import { Lead } from './Lead';
import { Footer } from './Footer';

export interface MunicipalityItem {
    id: string;
    slug: string;
    name: string;
    province: string,
    formUrl: string;
}

export interface CompaniesState {
    municipality: MunicipalityItem | null;
    companies: CompanyItem[];
    category: string | null;
    isLoading: boolean;
    error: { message: string } | null;
}

export default class Municipality extends React.Component<RouteComponentProps<{slug: string}>, CompaniesState> {
    static contextType = MunicipalitiesContext;
    context!: React.ContextType<typeof MunicipalitiesContext>;

    constructor(props: RouteComponentProps<{slug: string}>) {
        super(props);
        this.state = {
            municipality: null,
            companies: [],
            category: null,
            isLoading: true,
            error: null,
        };
    }

    private getUrl(municipality: MunicipalityItem): string {
        return `https://script.google.com/macros/s/${municipality.id}/exec`;
    }

    public componentDidMount() {
        let maybe = this.context.filter((m: MunicipalityItem) => m.slug === this.props.match.params.slug);
        if (maybe.length === 0) {
            throw new Error();
        }

        this.setState({
            municipality: maybe[0],
            isLoading: true,
        });

        axios
            .get(this.getUrl(maybe[0]))
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
            <>
                <Row>
                    <Col md={{ offset: 4, span: 4 }}>
                        <Categories
                            category={this.state.category}
                            onSelect={(category: string | null) =>
                                this.setState({ category })
                            }
                        />
                    </Col>
                </Row>
                <hr />
                <Companies
                    formUrl={this.state.municipality?.formUrl || ""}
                    companies={this.state.companies.filter(
                        (company: CompanyItem) =>
                            this.state.category == null ||
                            this.state.category === company.category
                    )}
                />
            </>
        );
    }

    public render(): React.ReactNode {
        return (
            <>
                <Container className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
                    <h1 className="display-4">{this.state.municipality?.name ?? '???'}</h1>
                    <Lead />
                </Container>

                <Container>
                    {this.renderContent()}
                    <Footer/>
                </Container>

                <CookieConsent
                    buttonText="Ok!"
                    style={{ backgroundColor: '#343a40' }}
                    buttonStyle={{ backgroundColor: 'gold' }}
                >
                    Il sito utilizza cookie per migliorarne l'esperienza di
                    navigazione.
                </CookieConsent>
            </>
        );
    }
}
