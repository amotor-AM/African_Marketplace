import axiosWithAuth from '../utils/axiosWithAuth';
//import user credentials here//

const setToken = (data) => {
  
  axiosWithAuth().post('https://reqres.in/api/users/2', data)
  .then(res => {
    console.log('user login success', res.data);
    localStorage.setItem('token', res.data.token);
    
  })
  .catch(err => {
    console.log('user login failed', err)
  })
};

export default setToken;