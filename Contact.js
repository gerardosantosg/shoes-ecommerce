import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const Contact = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const clearData = () => {
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <div className='contact__container'>
      <h3 className='contact__title'>Contact Us!</h3>
      <form className='contact__form'>
        <TextField
          style={{ marginBottom: '5%' }}
          className='contact__item'
          id='outlined-basic'
          label='Enter your name'
          variant='outlined'
          inputRef={nameRef}
        />
        <TextField
          style={{ marginBottom: '5%' }}
          className='contact__item'
          id='outlined-basic'
          label='Enter your email'
          variant='outlined'
          inputRef={emailRef}
        />

        <TextField
          style={{ marginBottom: '5%' }}
          id='filled-multiline-static'
          label='Enter your message'
          multiline
          rows={4}
          defaultValue=''
          variant='filled'
          inputRef={messageRef}
        />
        <Button variant='contained' color='secondary' onClick={clearData}>
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default Contact
