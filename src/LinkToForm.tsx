import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface LinkToFormProps {
    formUrl: string;
}

export default class LinkToForm extends React.PureComponent<LinkToFormProps> {
    public render(): React.ReactNode {
        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        <Button
                            as="a"
                            href={this.props.formUrl}
                            block
                            variant="secondary"
                            target="_blank"
                        >
                            Inserisci la mia attività!
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
