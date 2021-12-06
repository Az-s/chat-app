import axiosApi from '../../axiosApi';
import { toast } from "react-toastify";

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const FETCH_MESSAGE_REQUEST = 'FETCH_MESSAGE_REQUEST';
export const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
export const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

export const CREATE_MESSAGE_REQUEST = 'CREATE_MESSAGE_REQUEST';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

export const fetchMessagesRequest = () => ({ type: FETCH_MESSAGES_REQUEST });
export const fetchMessagesSuccess = messages => ({ type: FETCH_MESSAGES_SUCCESS, payload: messages });
export const fetchMessagesFailure = () => ({ type: FETCH_MESSAGES_FAILURE });

export const fetchMessageRequest = () => ({ type: FETCH_MESSAGE_REQUEST });
export const fetchMessageSuccess = message => ({ type: FETCH_MESSAGE_SUCCESS, payload: message });
export const fetchMessageFailure = () => ({ type: FETCH_MESSAGE_FAILURE });

export const createMessageRequest = () => ({ type: CREATE_MESSAGE_REQUEST });
export const createMessageSuccess = () => ({ type: CREATE_MESSAGE_SUCCESS });
export const createMessageFailure = (error) => ({ type: CREATE_MESSAGE_FAILURE, payload: error });

export const fetchMessages = () => {
    return async dispatch => {
        try {
            dispatch(fetchMessagesRequest());
            const response = await axiosApi.get('/messages');
            dispatch(fetchMessagesSuccess(response.data));
        } catch (error) {
            dispatch(fetchMessagesFailure(error));
        }
    }
};

export const fetchMessage = id => {
    return async dispatch => {
        try {
            dispatch(fetchMessageRequest());
            const response = await axiosApi.get('/messages/' + id);
            dispatch(fetchMessageSuccess(response.data));
        } catch (e) {
            dispatch(fetchMessageFailure());
        }
    };
};

export const deleteMessage = (id) => {
    return async dispatch => {
        try {
            dispatch(fetchMessageRequest());

            await axiosApi.delete('/messages/' + id);
            dispatch(fetchMessageSuccess());
            toast.info('Message deleted');
        } catch (e) {
            dispatch(fetchMessageFailure(e));
        }
    };
};

export const createMessage = messageData => {
    return async dispatch => {
        try {
            dispatch(createMessageRequest());
            await axiosApi.post('/messages', messageData);
            dispatch(createMessageSuccess());
            toast.success('Message created');
        } catch (e) {
            dispatch(createMessageFailure(e.response.data));
            toast.error('Could not create message');
        }
    };
};