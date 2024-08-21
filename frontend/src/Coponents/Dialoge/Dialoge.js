import React from 'react'
import './Dialoge.css'
import Rating from '../Rating/Rating'
import axios from 'axios';
import { useContext } from 'react';
import {toast} from 'react-hot-toast' 
import { RateContext } from '../../Context/RateContext';



function Dialoge(props) {
    console.log("props",props);
    const value= useContext(RateContext);
    
    
     const {rating,setrating}= value;
     
    const ratter= async (event)=>{
          const {chapter_id, bookid}=props;
          console.log("event",event);

         const res= await axios.post("http://localhost:300/rating",{
             chapter_id,
             bookid,
             rating
         }) 
         console.log("updatted_data",res.data.updatted_data);  
          if(res.data.sucess)
          {
              toast.success(res.data.error);
             
          }
          else
          {
             toast.error(res.data.error);
          }

          let modal= document.getElementById("my_modal_3");
          modal.style.display="none";
          setTimeout(()=>{
               window.location.reload();
          },1000);
           
        

        
    }
  return (
    <div>
      
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle  absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg mb-2 text-center">Rate Now</h3>
            {
                <Rating />   
                
            }

           <div className='text-center mt-5'>
           <button className='btn btn-secondary ' id="closer" onClick={ratter}>Submit</button>
           </div>

           
        </div>
</dialog>
    </div>
  )
}

export default Dialoge
