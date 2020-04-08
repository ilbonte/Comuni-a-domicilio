import React from 'react';

export var Footer: React.FC<{}> = (props): React.ReactElement => {
    return (
        <footer className="border-top pt-4 mt-4 mb-4">
            Fatto con <i className="fa fa-heart" /> e con la mascherina da
            Davide Bontempelli, Mattia Larentis e Marco Musi.
        </footer>
    );
};
