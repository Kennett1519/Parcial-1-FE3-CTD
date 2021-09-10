import React, { Component } from 'react';

class Seleccion extends Component {


    render() {
        return (

            <div className="opcion">
                <button id={this.props.storyId} className="botones" onClick={this.props.handleClick}>
                    {this.props.storyId}

                </button>

                <h2>{this.props.storyOption}</h2>
            </div>
        )
        
    }



}

export default Seleccion;