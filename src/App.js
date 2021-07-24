import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './Friend';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lists } from './list';

const FriendComponent = lists.map((user , i) => {
  return <Friend key={i} id={lists[i].id} name={lists[i].name} info={lists[i].info}/>
})
function App() {
  return (
    <div >
      <h1 className='text-center '>Friend List</h1>
      <div className='text-center'>
      {FriendComponent}
      </div>
      </div>
  );
}

export default App;
