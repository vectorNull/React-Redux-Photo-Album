import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('fetch/users', async () => {
  const response = await axios.get('http://localhost:3005/users');
  
  //! DEV ONLY
  // await pause(1000);
  
  //* action.payload property
  return response.data;
});

//! DEV ONLY
// const pause = (duration) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration)
//   })
// };

export { fetchUsers };