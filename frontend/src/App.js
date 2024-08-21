
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignUP from './Pages/LoginSignUP';
import SingleBook from './Coponents/SingleBook/SingleBook';
import Home from './Pages/Home/Home';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <div>
        <Toaster postion="top-center" toastOptions={
          {
            duration:3000,
            style:{
              //  background: 'black',
              //  color:'white',
              //  fontWeight:500,
            }
        }}></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
           {/* <Route path='/' element={localStorage.getItem("token")?<Home/>:<LoginSignUP/>}/> */}
           <Route path='/' element={<Home/>}/>
           <Route path="/book/:bookid" element={<SingleBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
