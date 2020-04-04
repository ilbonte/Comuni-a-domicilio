import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Categories extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <Container className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
                <h1 className="display-4">Castiglione a Domicilio</h1>
                <p className="lead">
                    attività che consegnano direttamente a casa tua
                </p>
            </Container>
        );
    }
}
