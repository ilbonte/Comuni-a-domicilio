import React from 'react';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

export interface CompanyItem {
    name: string;
    category: string;
    deliveredGoods: string;
    website: string;
    phoneNumber: string;
    closedDays: string[];
    notes: string;
    isOpen: boolean;
    imageUrl: string;
}

const DEFAULT_IMG_URL =
    'https://drive.google.com/uc?id=1-S4If6GDhzchCvEeoS_J3QI-i6r-NPXB';

export default class Company extends React.PureComponent<CompanyItem> {
    private renderPhoneNumber(): React.ReactNode {
        if (this.props.phoneNumber == null) {
            return null;
        }

        return (
            <Button
                variant="dark"
                href={`tel:${this.props.phoneNumber}`}
                className="rounded-circle mr-2 py-1 px-2"
            >
                <i className="fa fa-phone-alt"></i>
            </Button>
        );
    }

    private renderWebsite(): React.ReactNode {
        if (this.props.website == null) {
            return null;
        }

        return (
            <Button
                variant="dark"
                href={this.props.website}
                className="rounded-circle mr-2 py-1 px-2"
            >
                <i className="fa fa-globe"></i>
            </Button>
        );
    }

    private renderDeliveredGoods(): React.ReactNode {
        if (this.props.deliveredGoods == null) {
            return null;
        }
        return (
            <>
                <dt>Specializzati in</dt>
                <dd>{this.props.deliveredGoods}</dd>
            </>
        );
    }

    private renderClosedDays(): React.ReactNode {
        if (this.props.closedDays == null) {
            return null;
        }
        return (
            <>
                <dt>Giorni di chiusura</dt>
                <dd>{this.props.closedDays.join(', ')}</dd>
            </>
        );
    }

    private renderNotes(): React.ReactNode {
        if (this.props.notes == null) {
            return null;
        }
        return (
            <>
                <dt>Ulteriori informazioni</dt>
                <dd>{this.props.notes}</dd>
            </>
        );
    }

    private renderIsOpen(): React.ReactNode {
        if (this.props.isOpen) {
            return (
                <OverlayTrigger
                    overlay={<Tooltip id="aperto">Oggi aperto</Tooltip>}
                >
                    <i className="fa fa-circle text-success"></i>
                </OverlayTrigger>
            );
        }
        return (
            <OverlayTrigger
                overlay={<Tooltip id="chiuso">Oggi chiuso</Tooltip>}
            >
                <i className="fa fa-circle text-danger"></i>
            </OverlayTrigger>
        );
    }

    public render(): React.ReactNode {
        return (
            <Card>
                <Card.Body>
                    <Card.Title className="mb-0">
                        {this.renderIsOpen()} {this.props.name}
                    </Card.Title>
                </Card.Body>
                <Card.Img src={this.props.imageUrl ?? DEFAULT_IMG_URL} />
                <div
                    className="w-100 text-right mt-n3 pr-2"
                    style={{ zIndex: 666 }}
                >
                    {this.renderPhoneNumber()}
                    {this.renderWebsite()}
                </div>
                <Card.Body className="mt-n3">
                    <Card.Text>
                        <dl className="mb-0">
                            <>
                                <dt>Cateogria</dt>
                                <dd>{this.props.category}</dd>
                            </>
                            {this.renderDeliveredGoods()}
                            {this.renderClosedDays()}
                            {this.renderNotes()}
                        </dl>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
