import React from 'react'
import UsersList from './components/UsersList';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='container mx-auto px-4'>
        <UsersList />
      </div>
    </Provider>
  )
}

export default App