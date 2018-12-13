import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPostAndUser = () => async (dispatchEvent, getState) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatchEvent({ type: FETCH_POSTS, payload: response.data });

  //const userId = _.uniq(_.map(getState().posts, 'userId'));
  //userId.forEach(id => dispatchEvent(fetchUser(id)));

  // refactor userId with chain in lodash
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatchEvent(fetchUser(id)))
    .value();

}

export const fetchPosts = () => async dispatchEvent => {
  const response = await jsonPlaceholder.get('/posts');
  dispatchEvent({
    type: FETCH_POSTS,
    payload: response.data
  })
}

export const fetchUser = (id) => async dispatchEvent => _fetchUser(id, dispatchEvent);

const _fetchUser = _.memoize(async (id, dispatchEvent)=>{
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatchEvent({
    type: FETCH_USER,
    payload: response.data
  })
})