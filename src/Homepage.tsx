import React from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Typeahead} from 'react-bootstrap-typeahead';

import { MunicipalitiesContext } from './Context';
import { Lead } from './Lead';
import { Footer } from './Footer';

export default class Homepage extends React.PureComponent {
    static contextType = MunicipalitiesContext;
    context!: React.ContextType<typeof MunicipalitiesContext>;

    public render(): React.ReactNode {
        return (
            <Container className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">
                    Comuni a Domicilio{' '}
                    <small className="text-muted">.com</small>
                </h1>
                <Lead />

                <Jumbotron>
                    <h1>Trova il tuo comune!</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>
                        https://comuniadomicilio.com/#/
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Typeahead
                            id="municipally"
                            placeholder="Cerca una città..."
                            onChange={(selected:Array<SelectedMunicipality>) => {
                                console.log(selected);
                                handleRedirect(selected[0])
                            }}
                            options={this.context.map(item => { return {"id": item.slug, "label":item.name}})}
                        />
                    </InputGroup>

                </Jumbotron>         
                
                <Jumbotron>
                    <h1>Il tuo comune non c'è leggi qui!</h1>
                    <p>
                        Stiamo cercando un volontario per portare il progetto anche nel tuo comune.
                        Gestirai tu le informazioni e sarai riportato sulla pagina relativa.

                        Scrivici a <a href="mailto:marco.musi@outlook.com ">marco.musi@outlook.com </a> se vuoi aiutarci.

                    </p>

                </Jumbotron>




                <Footer />
            </Container>
        );
    }
}

interface SelectedMunicipality{
    id: string,
    label: string
}

 function handleRedirect(selected:SelectedMunicipality){
  window.location.assign(`/#/municipality/${selected.id}`);
}