
import './App.css';
import './components/movie.css';
 
import Displaymovie from './components/Displaymovie';
import DispHeader from './components/DispHeader'; 

function App() {
  
  return (
    
    <div >
       <div className='Moviesearchheader' > 
          <header>
             <DispHeader></DispHeader>
          </header>
       </div>
      <body>
         <Displaymovie></Displaymovie>  
      </body>  
             
  
      
    </div>
  );
}

export default App;
