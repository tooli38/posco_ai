import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageBoxStyle = {
  width: '320px',
  height: '320px',
  border: '1px solid #ddd',
};

const imageStyle = {
  width: '320px',
  height: '320px',
  objectFit: 'contain',
};

function ImageInput(props) {
  const [imageSrc, setImageSrc] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_IMAGE_API_URL;
  };
  const handleImageChange = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => setImageSrc(reader.result);
      resolve();
    });
  };
  return (
    <div>
      <p>이미지 미리보기</p>
      <div style={imageBoxStyle}>
        {imageSrc && <img src={imageSrc} alt='preview' style={imageStyle} />}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/png,image/jpeg'
          name='file'
          onChange={(e) => handleImageChange(e.target.files[0])}
        />
        <Button variant='primary' type='submit'>
          업로드하기
        </Button>
      </form>
    </div>
  );
}

export default ImageInput;
