import React, { useState, useEffect } from "react";
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import ReCAPTCHA from "react-google-recaptcha";
import {
  Form, Button
} from "react-bootstrap";
import { sendEmailContent, sendAdminEmail } from '../actions/emailActions';
import { useDispatch, useSelector } from 'react-redux';


const ContactScreen = () => {
  const dispatch = useDispatch();
  const [receiveTexts, setReceiveTexts] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [captcha, setCaptcha] = useState('')

  const emailSend = useSelector(state => state.emailSend)
  const { error, loading, success } = emailSend;

  useEffect(() => {
    if(success) {
      setReceiveTexts(false);
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    }
  }, [dispatch, success])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(captcha.length > 0) {

      dispatch(sendEmailContent({
        name,
        email
      }))
      dispatch(sendAdminEmail({
        name,
        email,
        message
      }))
    } else {
      alert('please complete required information');
    }
  }
  return (
    <FormContainer>
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Your message was sent!</Message>}
      <h1>Contact Ryan</h1>
      <Form onSubmit={handleSubmit}>
        <p style={{color: 'red', fontSize: '1rem'}}>* required field</p>
        <Form.Group controlId='name'>
          <Form.Label>Your Name <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control 
              type='email' 
              placeholder='Enter email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              name="email"
          />
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            type="tel"
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
        </Form.Group>

        <Form.Group controlId="receiveTexts">
          <Form.Check
            type="checkbox"
            label="Receive texts about specials and sales?"
            checked={receiveTexts}
            onChange={(e) => setReceiveTexts(e.target.checked)}
          ></Form.Check>
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>Message(optional)</Form.Label>
          <Form.Control 
            as="textarea"
            rows="4"
            placeholder="How can I help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </Form.Group>
        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={(value) => setCaptcha(value)} />
        <Button type="submit" variant="primary" style={{fontSize: '1.2rem'}}>{loading ? 'Sending...' : 'Send'}</Button>
   
      </Form>
    </FormContainer>
  )
}

export default ContactScreen
