import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const imageBoxStyle = {
  width: '400px',
  height: '400px',
  border: '1px solid #ddd',
};

const imageStyle = {
  width: '320px',
  height: '320px',
  objectFit: 'contain',
};

function ImageInput(props) {
  const [isUpload, setIsUpload] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [resImageSrc, setResImageSrc] = useState('');
  const [resImageTxt, setResImageTxt] = useState('');
  const [imageData, setImageData] = useState({
    originPath: '',
    resultPath: '',
    result: [],
  });

  const userId = JSON.parse(localStorage.getItem('user'))?.userId;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_IMAGE_API_URL;
    const formData = new FormData();
    const imgData = await axios.get(imageSrc, { responseType: 'blob' });
    formData.append('file', imgData.data);
    formData.append('userId', userId);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 202) {
        alert('업로드되었습니다.');
        const data = response.data;
        setResImageSrc(
          process.env.REACT_APP_IMAGE_API_URL + '/result/' + data.resultPath
        );

        let txt = '';
        const newArr = [...new Set(data.result)];
        for (let i = 0; i < newArr.length; i++) {
          txt += data.result[i] + ' ';
        }
        setImageData((prev) => ({
          ...prev,
          userId,
          originPath: data.originPath,
          resultPath: data.resultPath,
          result: data.result,
        }));
        setResImageTxt(txt);
        setIsUpload(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleImageChange = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => setImageSrc(reader.result);
      resolve();
    });
  };

  const handleEntry = async (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_OTHER_API_URL + '/file';
    try {
      const response = await axios.post(url, JSON.stringify(imageData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>이미지 미리보기</p>
            <div style={imageBoxStyle}>
              {imageSrc && (
                <img src={imageSrc} alt='preview' style={imageStyle} />
              )}
            </div>
          </Col>
          <Col>
            <p>검사 결과</p>
            <div style={imageBoxStyle}>
              {resImageSrc && (
                <img src={resImageSrc} alt='resultview' style={imageStyle} />
              )}
              <p>{resImageTxt && resImageTxt}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <form onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/jpeg'
          name='file'
          onChange={(e) => handleImageChange(e.target.files[0])}
        />
        <Button variant='primary' type='submit'>
          업로드하기
        </Button>
      </form>

      {isUpload && (
        <Button variant='outline-success' size='lg' onClick={handleEntry}>
          공원 입장하기
        </Button>
      )}
    </div>
  );
}

export default ImageInput;
