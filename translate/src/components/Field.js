import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
  renderText(language) {
    console.log(language);  
    return language ==='english' ? 'Name' : 'Naam';
  }
  render() {
    return (
      <div className='ui field'>
        <label>
          <LanguageContext.Consumer>
            {({language})=> this.renderText(language)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    )
  }

}

export default Field;