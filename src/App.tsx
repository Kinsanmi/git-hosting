import { useState } from 'react';
import './App.css'
import Navbar from './Navbar'

export type People = {
  person: {
    name: string;
    age: number;
    note: string;
    url: string
  }[]
}

function App(): JSX.Element {

  const [state, setstate] = useState<People["person"]>([
    {
      name: "James",
      age: 34,
      note: "Allogenic to staying on the bench",
      url: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Steven curry",
      age: 35,
      note: "Three point shooter on points",
      url: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ])


  return (
    <>
      <Navbar person={state} />
    </>
  )
}

export default App
