import {
  EMAIL_SEND_REQUEST,
  EMAIL_SEND_SUCCESS,
  EMAIL_SEND_FAIL,
  EMAIL_ADMIN_REQUEST,
  EMAIL_ADMIN_SUCCESS,
  EMAIL_ADMIN_FAIL
} from '../constants/emailConstants';
import emailjs from 'emailjs-com';
const { REACT_APP_SERVICE_ID, REACT_APP_USER_ID, REACT_APP_USER_TEMPLATE_ID, REACT_APP_ADMIN_TEMPLATE_ID } = process.env;

export const sendEmailContent = (email) => async (dispatch) => {
  const templateParams = {
    to_name: email.name,
    to_email: email.email,
  }
  
  try {
    dispatch({ type: EMAIL_SEND_REQUEST })
  
      await emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_USER_TEMPLATE_ID, templateParams, REACT_APP_USER_ID)
  
      dispatch({ 
        type: EMAIL_SEND_SUCCESS
      })
  
    } catch (error) {
      dispatch({
        type: EMAIL_SEND_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      })
    }
}

export const sendAdminEmail = (email) => async (dispatch) => {
  const templateParams = {
    from_name: email.name,
    reply_to: email.email,
    message: email.message,
  }
  try {
    dispatch({ type: EMAIL_ADMIN_REQUEST })

    await emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_ADMIN_TEMPLATE_ID, templateParams, REACT_APP_USER_ID);

    dispatch({ type: EMAIL_ADMIN_SUCCESS })

  } catch (error) {
    dispatch({
      type: EMAIL_ADMIN_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}