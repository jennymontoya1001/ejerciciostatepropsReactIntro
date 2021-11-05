import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Ejemplo = styled.h1`
  color: red;
`

export default class HeroesList extends Component {

constructor(){
    super();
    this.state = {
        heroes: []
    }
}

async componentDidMount(){
    const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json';
    const resp = await fetch(url);
    const {results} = await resp.json();
    this.setState({heroes:results})
    //console.log(this.state.heroes)
}


    render() {
        return (
            <div>
                <Ejemplo>Lista de Heroes</Ejemplo>
                {
                    this.state.heroes.map((hero,index) => (
                        <Cards
                            key = {index}
                            heroes = {hero}
                        />
                    ))
                }
            </div>
        )
    }
}
