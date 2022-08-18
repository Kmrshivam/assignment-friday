import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [res, setRes] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name,
      email,
      lastName,
    }
    fetch('https://reqres.in/api/users?page=2/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(dataToSubmit)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        alert('FORM submit successful')
      })
  }
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        setRes(res.data)
      })
  }, [])
  

  return (
    <div className="App">
      <form method='post' action="#" onSubmit={handleFormSubmit}>
        <lable>Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name" />
        </lable><br /><br />
        <lable>LastName:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} name="lastname" />
        </lable><br /><br />
        <lable>Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" />
        </lable><br /><br />
        <p>{JSON.stringify(res)}</p>
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
}

export default App;
