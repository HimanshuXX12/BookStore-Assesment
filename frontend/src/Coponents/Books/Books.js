import React from 'react'
import './Books.css'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import SingleBook from '../SingleBook/SingleBook'
function Books() {
    const [books,setbooks]= useState([]);
    useEffect(()=>{
        return ()=> fetcher();
    },[]);

    //  useEffect(()=>{
    //      document.addEventListener("click",toggleNav);
    //  },[])
    
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
         if(isNavOpen==true)
         {
            setIsNavOpen(false);
         }
         else{
             setIsNavOpen(true);

         }
    };

     const caller=  (domain)=>{

          if(domain=="computer vision")
          { 
             return "https://t4.ftcdn.net/jpg/00/98/98/55/240_F_98985528_kBQ2ngpMlL8NbpkxPpeegmpckSAVMrtx.jpg"

          }
          else if(domain=="artificial intelligence")
          {
              return "https://images.pexels.com/photos/8566524/pexels-photo-8566524.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          else if(domain=="mathematics")
          {
             return "https://t3.ftcdn.net/jpg/06/30/64/24/240_F_630642405_cxk5cH6p2EGTAclH65DUJ7dE5jkjBrJH.jpg"
          }
          else if(domain=="programming")
          {
             return "https://t4.ftcdn.net/jpg/07/89/93/67/240_F_789936793_XB9qlpZG4t1qivay63zG4DWUtvvfBqNv.jpg"
          }

          
     }
     const windowtoogle= async ()=>{
          if(isNavOpen==true)
          {
             setIsNavOpen(false);
          }
     }
    const fetcher= async ()=>{
        const res= await axios.get("https://bookstore-assesment-truk.onrender.com/books");
        console.log(res.data.books);
         setbooks(res.data.books);
    }

    const getdate= (timeline)=>{
        const date= new Date(timeline);
        return date.getDate();
    }

    
    const getMonth= (timeline)=>{
      const date= new Date(timeline);
      return date.getMonth();
  }

  
  const getYear= (timeline)=>{
    const date= new Date(timeline);
    return date.getFullYear();
}
  return (
    <div className={`relative min-h-screen transition-all duration-1000 ${isNavOpen ? 'brightness-50' : ''}`} onClick={windowtoogle}>
    {/* Navigation Bar */}
    <div className={`fixed top-0 left-0 h-full   slider   transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-800`}>
    
      {/* Add navigation items here */}
      <h1 className='font-bold mt-12 pl-5'>Admin Dashboard</h1>
      <nav className="p-4  ">
        <ul>
          <li className='item'><Link to="/">
          <i class="bi bi-house-add-fill"></i><span className='ml-3'>Home</span></Link></li>
          <li className='item'><Link to="/book/66c30e68a93503b347b59784"><i class="bi bi-book"></i><span className='ml-3'>Mathmatics</span></Link></li>
          <li className='item'><Link to="/book/66c30e68a93503b347b597a5"><i class="bi bi-book"></i><span className='ml-3'>Computer Vision</span></Link></li>
          <li className='item'><Link to="/book/66c30e68a93503b347b597b7"><i class="bi bi-book"></i><span className='ml-3'>Intro to Deep learning</span></Link></li>
          <li className='item'><Link to="/book/66c30e68a93503b347b59797"><i class="bi bi-person-lines-fill"></i><span className='ml-3'>Introduction to Programming</span></Link></li>
          <li className='item'><Link to="#">
          <i class="bi bi-box-arrow-right"></i> <span className='ml-3'>Logout</span>
          </Link></li>
     
        </ul>
      </nav>
    </div>

    {/* Button to open/close navigation */}
    {
        !isNavOpen && <div className=' absolute top-4 left-4 z-50 p-4 cursor-pointer  rounded-lg' onClick={toggleNav}>
        <i class="bi bi-list"></i>
      </div>
    }

    {/* Books Display */}
    <div className="grid grid-cols-1 md:grid-cols-2 books gap-8 ">
      {books.map((book) => 
      {
         const bookurl=caller(book.domain);
         return (
            <div className="card bg-base-100 home_card  shadow-xl">
            <figure className="px-10 pt-10">
                <img  
                src={bookurl}
                alt="Shoes"
                className="rounded-xl imager" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book.name}</h2>
                <p className='description'>{book.description}</p>
                <div className="card-actions flex justify-between w-full ">
                 {
                    book.domain?.map((domain)=>{
                        return (
                            <Link to={`/book/${book._id}`}>  <button className="btn btn-primary uppercase mt-4 ">{domain}</button> </Link>
                        )
                    })
                 }
                 <button className='btn btn-secondary mt-4 font-bold'>{`${getdate(book.date)}-${getMonth(book.date)}-${getYear(book.date)}`}</button>
                </div>
            </div>
            </div>
         )
       })}
       
    </div>
  </div>
  )
}

export default Books
