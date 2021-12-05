import {
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE,
} from './../actions/chatActions';

const initialState = {
    messages: [],
    message: null,
    fetchLoading: false,
    createMessageLoading: false,
    createMessageError: null
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MESSAGES_REQUEST:
        return {...state, fetchLoading: true};
      case FETCH_MESSAGES_SUCCESS:
        return {...state,  fetchLoading: false, messages: action.payload};
      case FETCH_MESSAGES_FAILURE:
        return {...state, fetchLoading: false};
      case CREATE_MESSAGE_REQUEST:
        return {...state, createMessageLoading: true};
      case CREATE_MESSAGE_SUCCESS:
        return {...state, createMessageLoading: false, createMessageError: null};
      case CREATE_MESSAGE_FAILURE:
        return {...state, createMessageLoading: false, createMessageError: action.payload};
      default:
        return state;
    }
  };
  
  export default chatReducer;