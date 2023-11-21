import React from 'react';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';


function UserListItem({ user }) {
  const [doDeleteUser, isLoadingDeleteUser, deletingUsererror] = useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUser(user);
  }

  const header = <>
    <Button className='mr-3' loading={isLoadingDeleteUser} onClick={handleDeleteUser}>
      <GoTrashcan />
    </Button>
    {deletingUsererror && <div>Error deleting user...</div>}
    {user.name}
  </>

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}

export default UserListItem