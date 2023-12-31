import React from 'react';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useDeleteAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
  const [deleteAlbum, results] = useDeleteAlbumMutation(album);

  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  }

  const header = <>
    <Button className='mr-4' loading={results.isLoading} onClick={handleDeleteAlbum}>
      <GoTrashcan />
    </Button>
    {album.title}
  </>

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumsListItem