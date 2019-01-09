import { takeEvery, call, fork, put, takeLatest, take } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function *getUser() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }))
  }catch(e) {

  }
}

function *watchGetUserRequest() {
  yield takeEvery(actions.types.GET_USERS_REQUEST, getUser);
}

function *createUser(action) {
  try {
    yield call(api.createUser, { firstName: action.payload.firstName, lastName: action.payload.lastName});
    yield call(getUser);
  } catch (e) {

  }
}
function *watchCreateUserRequest() {
  yield takeLatest(actions.types.CREATE_USER_REQUEST, createUser);
}
function *deleteUser({userId}) {
  console.log(typeof userId);
  try {
    yield call(api.deleteUser, { userId });
    yield call(getUser);
  } catch (e) {

  }
}

function *watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.types.DELETE_USER_REQUEST);
    console.log('watch delete', action);
    yield call(deleteUser, {
      userId: action.payload.userId
    })
  }
}
const usersSaga = [
  fork(watchGetUserRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
]

export default usersSaga;