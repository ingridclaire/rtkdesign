import {
  EMAIL_SEND_SUCCESS,
  EMAIL_SEND_FAIL,
  EMAIL_SEND_REQUEST,
  EMAIL_ADMIN_SUCCESS,
  EMAIL_ADMIN_FAIL,
  EMAIL_ADMIN_REQUEST

} from '../constants/emailConstants';

export const emailSendReducer = (state = { email: {} }, action) => {
  switch (action.type) {
    case EMAIL_SEND_REQUEST:
      return { loading: true }
    case EMAIL_SEND_SUCCESS:
      return { 
        loading: false, 
        success: true
      }
    case EMAIL_SEND_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const emailAdminReducer = (state = { email: {} }, action) => {
  switch (action.type) {
    case EMAIL_ADMIN_REQUEST:
      return { loading: true }
    case EMAIL_ADMIN_SUCCESS:
      return { 
        loading: false, 
        success: true
      }
    case EMAIL_ADMIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}