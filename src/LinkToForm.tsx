import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class LinkToForm extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        <Button
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdci-4udC2gyI2wZcZcsa8nEStyQ0Ga0PuzjtPADBYtlKOsrg/viewform"
                            block
                            variant="danger"
                        >
                            Inserisci la mia attività!
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
