import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUser } from '../actions';
import UserHeader from './UserHeader';
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUser();
  }
  renderedList() {
    return this.props.posts.map((post)=>
      <div className='item' key={post.id}>
        <i className='large middle aligned icon user'/>
        <div className='content'>
          <div className='description'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className='ui relaxes divided list'>
        {this.renderedList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);