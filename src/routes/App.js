import { Component, Fragment } from "react";
import Company from "../components/Company.js";
import Movie from "../components/Movie.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : [],
      companies : [
        {
          "id": `company + Date.now()`,
          "name": "disney",
        },
        {
          "name": "pixar",
        },
        {
          "name": "marvel",
        },
        {
          "name": "starwars",
        },],
    };
  }

  // Méthode asynchrone pour récupérer les données des membres de l'API
  async getMovies() {
    const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(response => response.json());
    console.log(data);

    this.setState({
      movies:data.slice(0,6)
    })
  }

  // La méthode componentDidMount est appelée automatiquement lors de la création du composant App après le premier rendu
  componentDidMount() {
    this.getMovies();
  }


  //La méthode render sera automatiquement appelée lorsque le composant App sera interrogé dans du JSX sous la forme suivante : <App/>
  render() {
    const listMovies = this.state.movies.map((movie) => {
      return (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster}/> // <- Ceci est un composant
      )
    });

    const listCompanies = this.state.companies.map((company) => {
      return (
        <Company key={company.name + Date.now()} name={company.name} /> // <- Ceci est un composant
      )
    });

    return (
      <Fragment> {/* <Fragment> > Permet d'encapsuler code JSX dans une seule balise parente mais qui ne sera pas affichée dans le HTML */}
        <header>
          <div className="container">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo Disney +" />
          </div>
        </header>
        <main>
          <section id="banner">
          </section>
          <section id="companies">
            <div className="container cards">
              {listCompanies}
              {/* <div className="card box-shadow"><img src={process.env.PUBLIC_URL + '/img/companies/logo-disney.png'} alt="Logo Disney" /></div>
              <div className="card box-shadow"><img src={process.env.PUBLIC_URL + '/img/companies/logo-pixar.png'} alt="Logo Pixar" /></div>
              <div className="card box-shadow"><img src={process.env.PUBLIC_URL + '/img/companies/logo-marvel.png'} alt="Logo Marvel" /></div>
              <div className="card box-shadow"><img src={process.env.PUBLIC_URL + '/img/companies/logo-starwars.png'} alt="Logo Star Wars" /></div> */}
            </div>
          </section>
          <section id="latest"><h1>Nouveautés</h1>
            <div className="container">
                {listMovies}
            </div></section>
          <section id="suggest"><h1>Suggestions</h1></section>
          
        </main>
      </Fragment>
    )
  }
}