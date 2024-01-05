import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

import Header from '../components/Header';
const divStyle = {
  width: '70vw',
  margin: '0 auto',
};
function AdminHome(props) {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem('user');
    getEntry();
    if (user == null) {
      window.location.href = '/login';
    }
  }, []);

  const getEntry = async () => {
    const url = process.env.REACT_APP_OTHER_API_URL + '/file?page=0';
    try {
      const response = await axios.get(url);
      setDataList(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <div style={divStyle}>
        <h2>여기는 관리자일때 보이는 화면입니다.</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>userId</th>
              <th>createdDate</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.length > 0
              ? dataList.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.userId}</td>
                      <td>{data.createdAt}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminHome;
