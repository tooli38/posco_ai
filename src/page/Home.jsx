import React from 'react';
import Header from '../components/Header';
import ImageInput from '../components/ImageInput';
const divStyle = {
  width: '70vw',
  margin: '0 auto',
};
function Home(props) {
  const { userName, userId } = props;
  return (
    <div>
      <Header userName={userName} />
      <div style={divStyle}>
        <ImageInput />
      </div>
    </div>
  );
}

export default Home;
