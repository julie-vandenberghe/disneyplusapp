import { Component, Fragment } from "react";
import Movie from "../components/Movie.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []
    };
  }

  // Méthode asynchrone pour récupérer les données des membres de l'API
  async getMovies() {
    const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(response => response.json());
    console.log(data);

    this.setState({
      movies:data
    })
  }

  // La méthode componentDidMount est appelée automatiquement lors de la création du composant App après le premier rendu
  componentDidMount() {
    this.getMovies();
  }

  //La méthode render sera automatiquement appelée lorsque le composant App sera interrogé dans du JSX sous la forme suivante : <App/>
  render() {
    const listMovies = this.state.movies.map((movie, index) => {
      return (
        <Movie key={movie.id} id={movie.id} name={movie.name}/> // <- Ceci est un composant
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
              <div className="card"><img src={process.env.PUBLIC_URL + '/img/companies/logo-disney.png'} alt="Logo Disney" /></div>
              <div className="card"><img src={process.env.PUBLIC_URL + '/img/companies/logo-pixar.png'} alt="Logo Pixar" /></div>
              <div className="card"><img src={process.env.PUBLIC_URL + '/img/companies/logo-marvel.png'} alt="Logo Marvel" /></div>
              <div className="card"><img src={process.env.PUBLIC_URL + '/img/companies/logo-pixar.png'} alt="Logo Pixar" /></div>
            </div>
          </section>
          <section id="latest"></section>
          <section id="banner"></section>
          <div className="">
            <h1>Disney+</h1>
            <p>Liste des films :</p>
            <ul>
              {listMovies}
            </ul>
          </div>
        </main>
      </Fragment>
    )
  }
}