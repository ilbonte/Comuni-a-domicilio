import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import { MunicipalityItem } from './Municipality';
import { MunicipalitiesContext } from './Context';
import { Lead } from './Lead';
import { Footer } from './Footer';

export default class Homepage extends React.PureComponent {
    static contextType = MunicipalitiesContext;
    context!: React.ContextType<typeof MunicipalitiesContext>;

    private getMapUrl({ name, province }: MunicipalityItem): string {
        return `https://maps.google.com/maps?q=${name},${province}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }

    private renderMunicipality(
        municipality: MunicipalityItem
    ): React.ReactNode {
        return (
            <Card className="text-left" key={municipality.id}>
                <iframe
                    className="w-100 "
                    src={this.getMapUrl(municipality)}
                    frameBorder={0}
                    allowFullScreen
                    style={{ height: 300 }}
                />

                <Card.Body>
                    <Card.Title className="mb-0">
                        <Link
                            to={`/municipality/${municipality.slug}`}
                            className="text-dark"
                        >
                            {municipality.name}
                        </Link>
                        <br />
                        <small>{municipality.province}</small>
                    </Card.Title>
                </Card.Body>
            </Card>
        );
    }

    public render(): React.ReactNode {
        return (
            <Container className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">
                    Comuni a Domicilio{' '}
                    <small className="text-muted">.com</small>
                </h1>
                <Lead />

                <CardColumns className="mt-5">
                    {this.context.map(this.renderMunicipality.bind(this))}
                </CardColumns>

                <Footer />
            </Container>
        );
    }
}
