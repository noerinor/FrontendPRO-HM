import { takeEvery, put, call } from 'redux-saga/effects';


const mockApi = {
  fetchTodos: () => Promise.resolve(['Redux-Saga Task 1', 'Redux-Saga Task 2']),
};


function* loadTodos() {
  try {
    const todos = yield call(mockApi.fetchTodos);
    yield put({ type: 'todos/loadSuccess', payload: todos });
  } catch (e) {
    yield put({ type: 'todos/loadFailure', message: e.message });
  }
}


function* rootSaga() {
  yield takeEvery('todos/loadRequest', loadTodos);
}

export default rootSaga;
