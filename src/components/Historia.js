import React, { Component } from 'react';
import historias from "./data.json";
import Seleccion from "./Seleccion";
import Recordatorio from "./Recordatorio";


const historico = []
class Historia extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selection: 0,
            selectionLetter: ""
        }

    }

    componentDidMount() {

        historias.push(historias.shift());
    }

    componentDidUpdate(prevProps, prevState) {

        historias.push(historias.shift());
        
        historias.push(historias.shift());



        historico.push(this.state.selectionLetter);


        if (historico.length == 5) {
            alert("Fin de la historia!.");
            window.location.replace('');
        }

    }

    handleClick = (event) => {
        console.log(historias.lenght)
        if (event.target.id == "A") {

            this.setState({ selection: 0, selectionLetter: "A" })
        } else {
            this.setState({ selection: 1, selectionLetter: "B" })
        }

    }

    render() {
        return (
            <div className="layout">

                <h1 className="historia">{historias[this.state.selection].historia}</h1>
                
                <div className="opciones">

                    <Seleccion storyId="A" storyOption={historias[this.state.selection].opciones.a} handleClick={this.handleClick} />

                    <Seleccion storyId="B" storyOption={historias[this.state.selection].opciones.b} handleClick={this.handleClick} />

                </div>

                <Recordatorio lastSelection={this.state.selectionLetter} historico={historico.map(
                    (event, index) => (<li key={index}>{event}</li>), historias[this.state.selection].id
                )} />

            </div>
        )
    }
}

export default Historia;