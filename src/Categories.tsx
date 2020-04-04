import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export interface CategoriesProps {
    category: string | null;
    onSelect: (category: string | null) => void;
}

export default class Categories extends React.PureComponent<CategoriesProps> {
    static values: string[] = [
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
    
    public render(): React.ReactNode {
        return (
            <DropdownButton
                id="dropdown-basic-button"
                title={
                    <>
                        <i className="fas fa-fw fa-filter"></i>{' '}
                        {this.props.category ?? 'Tutto'}
                    </>
                }
                variant="light"
                onSelect={this.props.onSelect}
            >
                <Dropdown.Item eventKey={undefined}>Tutto</Dropdown.Item>
                {Categories.values.map((category: string) => (
                    <Dropdown.Item eventKey={category}>
                        {category}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        );
    }
}
