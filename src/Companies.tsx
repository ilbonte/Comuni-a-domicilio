import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

import Company, { CompanyItem } from './Company';
import LinkToForm from './LinkToForm';

export interface CompaniesProps {
    formUrl: string;
    companies: CompanyItem[];
}

export default class Companies extends React.PureComponent<CompaniesProps> {
    public render(): React.ReactNode {
        return (
            <CardColumns>
                <LinkToForm formUrl={this.props.formUrl} />
                {this.props.companies.map((company: CompanyItem) => (
                    <Company key={company.name} {...company} />
                ))}
            </CardColumns>
        );
    }
}
