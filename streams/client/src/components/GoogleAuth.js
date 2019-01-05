import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', ()=> {
      window.gapi.client.init({
        clientId: '746247988702-4jlag4niosels9hrngj1dn7b2f1j6tmt.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance();
        console.log(this.auth);
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else {
      this.props.signOut();
    }
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  renderedButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }
    else if (this.props.isSignedIn === true) {
      return (
        <button 
          onClick={this.onSignOut}
          className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    }
    else {
      return (
        <button 
          onClick={this.onSignIn}
          className='ui red google button'>
          <i className='google icon' />
          Sign In with Google
      </button>
      )
    }
  }
  render() {
    return (
      <div>{this.renderedButton()}</div>
    )
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);