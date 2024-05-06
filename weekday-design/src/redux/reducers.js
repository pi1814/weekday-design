import { FETCH_JOBS, APPLY_FILTERS } from './actions';

const initialState = {
  jdList: [],
  filters: {},
  totalJobs: NaN
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
        return { ...state, jdList: action.payload.jdList, totalJobs: action.payload.totalCount };
    case APPLY_FILTERS:
      // Handle applying filters
    default:
      return state;
  }
};

export default reducer;
