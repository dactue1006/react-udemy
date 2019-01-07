import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from 'actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderAction() {
    return (
      <React.Fragment>
        <Link
          onClick={()=> this.props.deleteStream(this.props.match.params.id)} 
          to={`/streams/delete/${this.props.match.params.id}`} 
          className='ui button primary'>Delete</Link>
        <Link to='/' className='ui button'>Cancel</Link>
      </React.Fragment>
    )
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?"
    }
    return "Are you sure you want to delete this tream with title: " + this.props.stream.title;
  }
  render() {
    return (
        <Modal 
          title='Delete stream'
          content={this.renderContent()}
          action={this.renderAction()}
          dismiss={()=> history.push('/')}
        />
    )
  }
  
}

const mapStateToProps = (state, ownProps)=>({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(
  mapStateToProps, 
  { fetchStream, 
    deleteStream }
)(StreamDelete);