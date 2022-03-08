import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
class App extends React.Component {
  state = {
    characters: [],
  }


// Metodo para crear un array sin el index que le pasamos
removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

handleSubmit = (character) =>{
  this.setState({characters: [...this.state.characters, character]})
}

render() {
  const { characters } = this.state

  return (
    <div className="container">
      <h1> Tutorial de React </h1>
      <p> Podeis seguir aquí el  <a href="https://www.taniarascia.com/getting-started-with-react">Tutorial de Taniarascia </a></p>
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      <Form handleSubmit={this.handleSubmit} />
    </div>
    )
    }
}
export default App
