import React from 'react';

const Context = React.createContext();

export class LanguageStore extends React.Component {
  state = {
    language: 'english'
  }

  onChangeLanguage = (language)=> {
    this.setState({
      language: language
    })
  }
  
  render() {
    return (
      <Context.Provider value={{ ...this.state, onChangeLanguage: this.onChangeLanguage }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;