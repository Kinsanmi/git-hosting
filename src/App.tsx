import { useEffect, useState } from 'react';
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

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string| null>(null)

  const [state, ] = useState<People["person"]>([
    {
      name: "Steven curry",
      age: 35,
      note: "Three point shooter on points",
      url: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ])

  const fetchData = () =>{
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
       resolve({events: state})

        reject({message: "Request Failed"})
      }, 4000);
     })
  }

  const dataFile = async() =>{
    setLoading(true);
    try {
      const res = await fetchData()
      console.log(res)
    } catch (error) {
      setError((error as Error). message)
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    dataFile()
  },[])

  const renderLoad = () =>{
    if(loading){
      return <div>Loading...</div>
    }

    if(error){
      return <div>404 Error</div>
    }

    return (
      <>
      <Navbar person={state} />
      </>
    )
  }


  return (
    <>
      {renderLoad()}
    </>
  )
}

export default App
