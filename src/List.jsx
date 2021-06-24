import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const List = (props) =>{

  //we will delete in the app component becoz props are immutable 

   return(
   <>
   <div className='todo_style'>

     <div className='iconhold'>
          <span onClick={()=>{
                  props.onEdit(props.id_)
               }}><EditIcon className='fa-times edit'/></span>
          <span onClick={()=>{
                  props.onSelect(props.id_)
                }}><DeleteIcon className='fa-times delete'/></span>
     </div>
   <li> {props.text} </li>
   </div>
   </>
   );
}

export default List;