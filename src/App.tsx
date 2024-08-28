
import { useEffect } from 'react';





const getData = async()=> {
  try {
    const response= await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a495081560f05b8b616be3bb640a8954");
    const data= await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  
}

function App() {
  
useEffect(()=> {
  getData()
},[])



  return (
    <>
      <h1>testing</h1>
      
    </>
  )
}

export default App
