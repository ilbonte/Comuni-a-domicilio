import React from 'react';
import Container from 'react-bootstrap/Container';

import { Footer } from './Footer';

export default class Info extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <Container className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Info</h1>
                <p className="lead">
                    Le attività che consegnano direttamente a casa tua.
                </p>

                <div
                    style={{ maxWidth: 500, margin: '0 auto' }}
                    className="text-left my-5"
                >
                    <p>
                        Comuni a Domicilio .com nasce per aiutare le attività
                        locali a superare la crisi e le famiglie a non dover
                        uscire di casa per far la spesa o regalarsi qualche
                        sfizio.
                    </p>
                    <p>
                        <strong>Risposte alle domande frequenti:</strong>
                    </p>
                    <p>
                        <strong>
                            In questo momento, qual'è il modo migliore in cui
                            posso sostenere l'iniziativa?
                        </strong>
                        <br />
                        Spargi la voce! Manda il sito a tutte le famiglie di
                        Castiglione che conosci.
                    </p>

                    <p>
                        <strong>
                            Le attivit&agrave; che consegnano a domicilio sono
                            autorizzate a farlo?
                        </strong>
                        <br />
                        &Egrave; loro responsabilit&agrave; esserlo ed &egrave;
                        responsabilit&agrave; delle autorit&agrave; competenti
                        fare i controlli. Noi inseriamo tutti perch&eacute; non
                        possiamo verificare i requisiti ove ce ne siano.
                    </p>

                    <p>
                        <strong>
                            Vuoi aggiungere un altro comune?
                        </strong>
                        <br />
                        Certo, contattaci a{' '}
                        <a href="mailto:marco.musi@outlook.com">
                            marco.musi@outlook.com
                        </a>
                        &nbsp;che ti spiego come fare.
                    </p>
                    <p>
                        <strong>Posso donare per sostenere il progetto?</strong>
                        <br />
                        &Eacute; meglio aiutare le raccote fondi degli ospedali
                        o comprare qualcosa dalle attivit&agrave; commericali
                        ora.
                    </p>
                </div>

                <Footer/>
            </Container>
        );
    }
}
