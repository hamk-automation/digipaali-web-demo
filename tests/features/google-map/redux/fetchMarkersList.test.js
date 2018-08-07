import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  GOOGLE_MAP_FETCH_MARKERS_LIST_BEGIN,
  GOOGLE_MAP_FETCH_MARKERS_LIST_SUCCESS,
  GOOGLE_MAP_FETCH_MARKERS_LIST_FAILURE,
  GOOGLE_MAP_FETCH_MARKERS_LIST_DISMISS_ERROR,
} from '../../../../src/features/google-map/redux/constants';

import {
  fetchMarkersList,
  dismissFetchMarkersListError,
  reducer,
} from '../../../../src/features/google-map/redux/fetchMarkersList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('google-map/redux/fetchMarkersList', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchMarkersList succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchMarkersList())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', GOOGLE_MAP_FETCH_MARKERS_LIST_BEGIN);
        expect(actions[1]).toHaveProperty('type', GOOGLE_MAP_FETCH_MARKERS_LIST_SUCCESS);
      });
  });

  it('dispatches failure action when fetchMarkersList fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchMarkersList({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', GOOGLE_MAP_FETCH_MARKERS_LIST_BEGIN);
        expect(actions[1]).toHaveProperty('type', GOOGLE_MAP_FETCH_MARKERS_LIST_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchMarkersListError', () => {
    const expectedAction = {
      type: GOOGLE_MAP_FETCH_MARKERS_LIST_DISMISS_ERROR,
    };
    expect(dismissFetchMarkersListError()).toEqual(expectedAction);
  });

  it('handles action type GOOGLE_MAP_FETCH_MARKERS_LIST_BEGIN correctly', () => {
    const prevState = { fetchMarkersListPending: false };
    const state = reducer(
      prevState,
      { type: GOOGLE_MAP_FETCH_MARKERS_LIST_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMarkersListPending).toBe(true);
  });

  it('handles action type GOOGLE_MAP_FETCH_MARKERS_LIST_SUCCESS correctly', () => {
    const prevState = { fetchMarkersListPending: true };
    const state = reducer(
      prevState,
      { type: GOOGLE_MAP_FETCH_MARKERS_LIST_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMarkersListPending).toBe(false);
  });

  it('handles action type GOOGLE_MAP_FETCH_MARKERS_LIST_FAILURE correctly', () => {
    const prevState = { fetchMarkersListPending: true };
    const state = reducer(
      prevState,
      { type: GOOGLE_MAP_FETCH_MARKERS_LIST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMarkersListPending).toBe(false);
    expect(state.fetchMarkersListError).toEqual(expect.anything());
  });

  it('handles action type GOOGLE_MAP_FETCH_MARKERS_LIST_DISMISS_ERROR correctly', () => {
    const prevState = { fetchMarkersListError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: GOOGLE_MAP_FETCH_MARKERS_LIST_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMarkersListError).toBe(null);
  });
});

