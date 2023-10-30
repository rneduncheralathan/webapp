import React, { useState, useEffect } from 'react';
import StateSevice from '../../services/StateSevice';
import {CustomModal} from '../utils/CustomModal';
import Pop from '../Pop';

function Home() {
  const [item, setStateList] = useState([]);
  const getstatelist = () => {
    StateSevice.getSateList().then((res) => {
      setStateList(res.data);
      console.log(res.data)
    })
  }

  useEffect(() => {
    getstatelist();
  }, [])

  return (

    <div>
      <div className='row'>
        <div className='col-12 col-md-6 col-sm-6'></div>
        <div className='col-12 col-md-6 col-sm-6'>
          <div className='grid float-end' >
            <span>
              <button className="btn btn-primary" onClick={CustomModal.open('custom-modal-2')}>Click me</button>
            </span>
            {/* <button className="btn btn-primary" onClick={CustomModal.close('custom-modal-2')}>Close</button> */}
          </div>
        </div>
      </div>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">code</th>
              <th scope="col">name</th>
            </tr>
          </thead>
          <tbody>
            {item.map((state) => (
              <tr key={state.id}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.code}</td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
      <CustomModal id="custom-modal-2">
          {/* <h1 style={{ height: 1000 }}>A Tall Custom Modal!</h1> */}
          {/* <Pop></Pop> */}
          <button onClick={CustomModal.close('custom-modal-2')}>Close</button>
        </CustomModal>
    </div>
  );
}

export default Home