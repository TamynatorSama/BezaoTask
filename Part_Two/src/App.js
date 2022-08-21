import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Card from './reusable/menuCard';
import OverCard from './reusable/OverCard';
import Data from "./menu.json"


function App() {

  const [display, addDisplay]=useState({display:"none"})
  const [overla, changeOverlay]=useState(false)
  const [data,addData] = useState(Data.menu)
  const [field,setField] = useState(false)
  const [newData,addnewData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: ""
  })



  //delete functionality
  function deleteMenu(id){
    var afterDel = []

    data.map(e=>{
      if(id === e.id){
      }
      else{
        afterDel.push(e)
      }
    })
    addData(afterDel)
    
  }

  //function for showing and hiding add menu
  function over(){
    if(overla === false){
      addDisplay({display:'grid'})
    }
    else{
      addDisplay({display:'none'})
    }
    changeOverlay(over=>!over)
  }




  function addNewMenu(event){
    setField(false)
    addnewData(newD=>({
      ...newD,
      id: data.length+1,
      [event.target.name]:event.target.value
    }))
  }
  function addMenu(){

    if(newData.image==="" || newData.description==="" || newData.name==="" || newData.price===""){
        setField(true)
    }
    else{
      addData(data=>[
        ...data,
        newData
      ])
      addDisplay({display:'none'})
      changeOverlay(over=>!over)
      addnewData(newD=>({
        id: "",
      name: "",
      description: "",
      price: "",
      image: ""
    }))
    }
  }


  let allMENU = data.map(e=><Card  key={e.id} id={e.id} image={e.image} title={e.name} description={e.description} price={e.price} del={deleteMenu}/>)

  return (
    <section>
      <div className="overlay" style={display}>
        <OverCard click={over} mainClick={addNewMenu} add={addMenu} newM={newData} check={field}/>
      </div>
      <Nav click={over}/>
      <main>
        {allMENU}
      </main>
    </section>
      
  );
}

export default App;
