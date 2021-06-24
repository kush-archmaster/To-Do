import React, {useState, useEffect} from 'react';
import List from './List';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EditIcon from '@material-ui/icons/Edit';

const getLocalItems = () =>{
   const list = localStorage.getItem('list');

   if(list) return JSON.parse(list);
   else return [];
}

const App = () =>{

  //hooks 
  const [task,setTask] = useState('');  //for one item
  const [items, setItems] = useState(getLocalItems());  //array for storing tasks
  const [toggle, setToggle] = useState(true);
  const [editted,setEditted] = useState(null); 


//this is important to get the value inputed
  const inputGiven = (event) =>{
    setTask(event.target.value)
  }

//this will update the array each time a new entry is made
  const listofTask = () =>{
    if(!task){
        alert('Write something!')
    } 

    else if(task && !toggle){
        setItems(
          items.map((elem)=>{
              if(elem.id === editted)
                    return { ...elem, content: task}
              return elem;
          })
          )

        setToggle(true);
        setTask('');
        setEditted(null)
      }

      else {
      const itemDetails = {
        id: new Date().getTime().toString(),
        content: task
      }
      setItems([...items, itemDetails])

      setTask('');  //to empty the value after adding it to the list

    }
    
  }


  //delete
  const deleteItem = (id_)=>{
     setItems((old_items)=>{
        return old_items.filter((arrEl) => arrEl.id!==id_)   
        //if index no of current full array doesnt match the id we are deleting then keep it if equal delete it
     })
  }

  //edit
  const editItem = (id_) =>{
     let editItem = items.find((currEl)=> {
        return currEl.id === id_ ;
     })
     
     setToggle(false);
     setTask(editItem.content);
     setEditted(id_);
    }

  //add data to local storage
  useEffect(() => {
       localStorage.setItem('list', JSON.stringify(items))
  }, [items]);

  return(
    <>
        <div className='main_div'>
          <div className='center_div'>
            <br/>
                  <h1>To Do List 📓</h1> 
             <input type='text' placeholder='Add an Item ✍️' onChange={inputGiven} value={task}/>

            {
              toggle? 
              <button className='btn pl' onClick={listofTask} >
              <PlaylistAddIcon className='matrialbtn'/></button>
              :<button className='btn ed' onClick={listofTask} >
              <EditIcon className='matrialbtn ' /> 
              </button>
              
            }

            <ol>
              {
                items.map((itemAdded) => {
                   return <List text= {itemAdded.content} 
                                key={itemAdded.id}
                                id_={itemAdded.id}  
                                onSelect= {deleteItem}
                                onEdit={editItem}
                                />
                })
              }
            </ol>
          </div>
        </div>
    </>
  )
}


export default App;
