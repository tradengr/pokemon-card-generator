import { Component } from 'react';
import Card from './components/Card';
import GenerateButton from './components/GenerateButton';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hp: '',
      name: '',
      type1: '',
      type2: '',
      attack: '',
      defense: '',
      speed: '',
      imgSrc: '',
      type1Color: '',
      type2Color: ''
    }
  }

  getPokeData = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    let id = Math.floor(Math.random() * 1008) + 1;   
    let generatedUrl = url + id;
    // fetch the generated url
    fetch(generatedUrl)
      .then(resp => resp.json())
      .then(data => this.generateCard(data))
  }

  // obj of colors to reference types
  generateCard = (data) => {
    const typeColor = {
      bug: "#26de81",
      dragon: "#ffeaa7",
      electric: "#fed330",
      fairy: "#FF0069",
      fighting: "#30336b",
      fire: "#f0932b",
      flying: "#81ecec",
      grass: "#00b894",
      ground: "#EFB549",
      ghost: "#a55eea",
      ice: "#74b9ff",
      normal: "#95afc0",
      poison: "#6c5ce7",
      psychic: "#a29bfe",
      rock: "#2d3436",
      water: "#0190FF",
    };

    this.setState({ hp: data.stats[0].base_stat, 
                    name: data.name[0].toUpperCase() + data.name.slice(1), 
                    type1: data.types[0].type.name,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    imgSrc: data.sprites.other['official-artwork'].front_default,
                    type1Color: typeColor[data.types[0].type.name]
    })
    if (data?.types[1]) {
      this.setState({ type2: data?.types[1].type.name });
      this.setState({ type2Color: typeColor[data?.types[1].type.name] }); 
    }  
  }

  componentDidMount() {
    this.getPokeData();
  }

  render() {
    const { hp, name, type1, type2, attack, defense, speed, imgSrc, type1Color, type2Color } = this.state;
    return (
      <div className="container">
        <h1 className='tc mb5 title f1'>Pokemon Card Generator</h1>
        <Card 
          hp={hp} 
          name={name} 
          type1={type1} 
          type2={type2} 
          attack={attack} 
          defense={defense} 
          speed={speed} 
          imgSrc={imgSrc}
          type1Color={type1Color} 
          type2Color={type2Color} 
        />
        <GenerateButton getPokeData={this.getPokeData} />
      </div>
    );
  }
}

export default App;