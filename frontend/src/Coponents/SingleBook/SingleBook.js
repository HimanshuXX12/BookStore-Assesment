import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './SingleBook.css'
import Dialoge from '../Dialoge/Dialoge';
import ChapterRating from '../ChapterRating/ChapterRating';
function SingleBook() {
    const {bookid}= useParams();
    const [book_data,setBookData]= useState([]);
    const [date,setdate]= useState(null);
    const [value,setvalue]= useState(false);
    const [chapter_id,setchapterid]= useState(null);
   
    const closer=  ()=>{
        console.log("go ahead");
          setvalue(null);
    }

    const closedialoge= async ()=>{
        setvalue(null);
  }

    useEffect(()=>{
       return ()=>fetcher();
    },[]);

     const getDate=  (timeline)=>{
         const new_date= new Date(timeline);
         return new_date.getDate();
     }

     const getmonth=  (timeline)=>{
        const new_date= new Date(timeline);
        return new_date.getMonth();
    }

    const getyear=  (timeline)=>{
        const new_date= new Date(timeline);
        return new_date.getFullYear();
    }
    const opener=  (id)=>{
        console.log("book_id",id);
        setvalue(true);
        document.getElementById('my_modal_3').showModal();
    
        setchapterid(id);

    }

    const fetcher= async ()=>{
        const res= await axios.get("https://bookstore-assesment-truk.onrender.com/books");
         const updatted= await res.data.books.filter((data)=>data._id==bookid);
         console.log("updatted",updatted);
         setBookData(updatted[0]);
         setdate(updatted[0].date);
    }

     console.log("chapters",book_data.chapters);
     console.log(date);

  return (
      <div className='head-single-book'>
        <div className='text-center header  p-8  uppercase font-bold '>
            {book_data.domain}
        </div>

      <div className='single_books grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3'>
         {
             book_data.chapters?.map((book)=>{
                  
                 return (
                    <div className="card bg-base-100 w-96  single_card shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        src="https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{book.text}</h2>
                            <p className=''>{book.name}</p>
                            <div className=" flex justify-between w-full mt-4">
                            {/* <button className="btn btn-primary ">Read</button> */}
                            <button className='btn btn-primary' onClick={()=>opener(book._id)}>Rate</button>
                            <button className="btn btn-secondary">{book.rating?<ChapterRating rate={book.rating}/>:`${getDate(date)}-${getmonth(date)}-${getyear(date)}`}</button>
                           
                            </div>
                        </div>
</div>
                 )
                })
            }

      </div>

      {
          <Dialoge closer={closedialoge}   chapter_id={chapter_id}  bookid={bookid} />
      }

 
      
 </div>
    
  )
}

export default SingleBook
