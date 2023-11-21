import React from 'react'
import { useFetchAlbumsQuery, useCreateAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ user }) {
  //* Use isFetching instead of isLoading; isLoading === true only first time you make req
  //* isFetching === true EACH TIME req is made
  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  //* 'results' is an object with similar properties contained 
  //* in the above query useFetchAlbumsQuery (results = { ..., data, error, isLoading, etc })
  const [addAlbum, results] = useCreateAlbumMutation();

  const handleCreateAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className='h-10 w-full' times={3} />
  } else if (error) {
    content = <div>Error fetching albums...</div>
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
        <Button onClick={handleCreateAlbum} loading={results.isLoading}>+ Add Album</Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList