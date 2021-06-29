import React, { useState } from 'react';
import List from './components/List';
import './App.css';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://img.bleacherreport.net/img/images/photos/003/887/656/hi-res-d38f826cad85a67fbdcca07996708053_crop_north.jpg?1602212240&w=3072&h=2048",
      age: 36,
      note: "Best to do it. Period!"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
