import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderText(language) {
    return language === 'english' ? 'Submit' : 'Vegoorro';
  }

  renderButton(value) {
    return (
      <button className={`ui button ${value}`}>
        <LanguageContext.Consumer>
          {({language})=> this.renderText(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    console.log(this.context);
    return (
      <ColorContext.Consumer>
        {(language)=> this.renderButton(language)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;