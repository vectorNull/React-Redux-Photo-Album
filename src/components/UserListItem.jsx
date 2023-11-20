import React from 'react';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/useThunk';


function UserListItem({ user }) {
  const [doDeleteUser, isLoadingDeleteUser, deletingUsererror] = useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUser(user);
  }

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>
          <Button className='mr-3' loading={isLoadingDeleteUser} onClick={handleDeleteUser}>
            <GoTrashcan />
          </Button>
          {deletingUsererror && <div>Error deleting user...</div>}
          {user.name}
        </div>
      </div>
    </div>
  )
}

export default UserListItem