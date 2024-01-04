import React, { Component } from 'react'

export default class MoviesFromCompany extends Component {

    state = {
        movies : []
    }

    //Méthode appelée après le premier rendu du component
    componentDidMount() { //Via le componentDidMount, on appelle la méthode asynchrone
        this.getMoviesFromCompany(this.props.match.params.name);
    }

    // Méthode asynchrone pour récupérer les données d'un membre provenant d'une API
    async getMoviesFromCompany(name) {
        const data = await fetch("https://elorri.fr/api/disney-plus/company/" + name).then(response => response.json());
        // Il ne reste plus qu'à mettre à jour le state pour injecter les données de l'API dans le tableau movie
        this.setState({
            movies:data
        })
   }

    render() {
        return (
          <div>coucou</div>
        )
    }
}
