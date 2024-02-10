import './App.css';    
import { increement, decreement } from './Actions/Index';                
import { useSelector, useDispatch } from 'react-redux';                    
import Validation from 'Validation'               
   
function App() {          
  const Dispatch = useDispatch()         
  var state = useSelector((state) => {   
    return state.Incdec.count           
  });
}
return <div className='App'>   
  <button onClick={() => {    
<h1>{state}</h1>                          
    dispatch(increement)      
  }}>Increement</button>      
  <button onClick={() => {          
    Dispatch(decreement)          
  }}>Decreement</button>    
</div>  
                                                                   
export default App;                 
                                                      