import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login(props) {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60vw',
    minWidth: '480px',
    height: '60vh',
    margin: '20vh auto',
    backgroundColor: '#ddd',
  };
  return (
    <div style={divStyle}>
      <h1>PPARK</h1>
      <form action='/login' method='post'>
        <div>
          <label htmlFor='userId'>
            <b>Username</b>
          </label>
          <br />
          <input
            type='text'
            placeholder='아이디를 입력하세요'
            id='userId'
            name='nickname'
            required
          />
        </div>
        <div>
          <label htmlFor='pw'>
            <b>Password</b>
          </label>
          <br />
          <input
            type='password'
            placeholder='비밀번호를 입력하세요'
            id='pw'
            name='password'
            required
          />
        </div>
        <Button variant='primary'>Login</Button>
      </form>
    </div>
  );
}

export default Login;
