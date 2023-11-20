import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('users/delete', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  //! Returning user bc response.data only returns an empty object and 
  //! our reducer will have no way of knowing which user to delete from state
  //* action.payload property
  return user;
});

export { deleteUser };