import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

  render() {
    return (
      <div>
        Select a language 
        <LanguageContext.Consumer>
          {({ onChangeLanguage }) => (
            <React.Fragment>
              <i className='flag us' onClick={()=> onChangeLanguage('english')}></i>
              <i className='flag nl' onClick={()=> onChangeLanguage('dutch')}></i>
            </React.Fragment>
          )}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default LanguageSelector;