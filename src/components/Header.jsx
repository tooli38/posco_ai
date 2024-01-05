import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const headerStyle = {
  width: '100vw',
  height: '60px',
  backgroundColor: '#ddd',
};

const divStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70vw',
  height: '60px',
  margin: '0 auto',
};
function Header(props) {
  const { userName } = props;
  return (
    <header style={headerStyle}>
      <div style={divStyle}>
        <a href='/'>
          <h2>LOGO</h2>
        </a>
        <p>{userName && userName}</p>
      </div>
    </header>
  );
}

export default Header;
