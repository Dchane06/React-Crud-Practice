import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Create() {
    let history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    

    const postData = () => {
        axios.post(`https://612c7ca2ab461c00178b5cec.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }

    return (
    <Form className="create-form">
    <Form.Field>
      <label style={{color: 'whitesmoke'}}>First Name</label>
      <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label style={{color: 'whitesmoke'}}>Last Name</label>
      <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
)
    }