import React from 'react';
import { Link } from 'react-router-dom';

export var Lead: React.FC<{}> = (props): React.ReactElement => {
    return (
        <p className="lead">
            Le attività che consegnano direttamente a casa tua.{' '}
            <Link to="/info">Scopri di più</Link>
        </p>
    );
};
