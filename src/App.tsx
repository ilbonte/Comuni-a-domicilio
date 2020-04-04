import axios, { AxiosResponse } from 'axios';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
            <div className="App">
                <Hero />
                <Container>
                    {this.renderContent()}
                    <footer className="border-top pt-4 mt-4 mb-4">
                        <p>
                            Castiglione a Domicilio nasce per aiutare le
                            attività locali a superare la crisi e le
                            famiglie a non dover uscire di casa per far la spesa
                            o regalarsi qualche sfizio.
                        </p>
                        <p>
                            <strong>Risposte alle domande frequenti:</strong>
                        </p>
                        <p>
                            <strong>
                                In questo momento, qual'è il modo
                                migliore in cui posso sostenere l'iniziativa?
                            </strong>
                            <br />
                            Spargi la voce! Manda il sito a tutte le famiglie di
                            Castiglione che conosci.
                        </p>
                        <p>
                            <strong>
                                Posso aggiungere un'attività che consegna a
                                domicilio a Castiglione che non c'è sul sito o
                                aggiungere info a quelle che ci sono?
                                <br />
                            </strong>
                            Certo, puoi riempire questo modulo e noi
                            aggiorneremo il sito:{' '}
                            <a href="https://forms.gle/8Xx9zeJWcrpsLnM77">
                                https://forms.gle/8Xx9zeJWcrpsLnM77
                            </a>
                        </p>
                        <p>
                            <strong>
                                Le attivit&agrave; che consegnano a domicilio
                                sono autorizzate a farlo?
                            </strong>
                            <br />
                            &Egrave; loro responsabilit&agrave; esserlo ed
                            &egrave; responsabilit&agrave; delle autorit&agrave;
                            competenti fare i controlli. Noi inseriamo tutti
                            perch&eacute; non possiamo verificare i requisiti
                            ove ce ne siano.
                        </p>
                        <p>
                            <strong>
                                Posso far creare un sito uguale per un altro
                                comune?
                            </strong>
                            <br />
                            Certo, contattaci a{' '}
                            <a href="mailto:marco.musi@outlook.com">
                                marco.musi@outlook.com
                            </a>
                            &nbsp;che ti spiego come fare.
                        </p>
                        <p>
                            <strong>
                                Posso donare per sostenere il progetto?
                            </strong>
                            <br />
                            &Eacute; meglio aiutare le raccote fondi degli
                            ospedali o comprare qualcosa dalle attivit&agrave;
                            commericali ora.
                        </p>

                        <hr/>

                        Fatto con <i className='fa fa-heart'/> e con la mascherina da Davide Bontempelli, Mattia Larentis e Marco Musi.
                    </footer>
                </Container>

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
