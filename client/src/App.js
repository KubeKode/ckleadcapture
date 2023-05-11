import './App.css';
import Counsoller from './Seller/Counsoller';
import Seller from './Seller/Seller';
import { Cousollerupdate } from './Seller/Cousollerupdate';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Refresh from './Seller/ButtonB';
function App() {
 
  return (
    <div className="App">
       <Refresh />
        <BrowserRouter>
      
      
        <Routes>
          <Route path='/SellerDashboard' element={<Seller/>}/>
          
          <Route path='/CounsollerDashboard' element={<Counsoller/>}/>
          </Routes>
          </BrowserRouter>
       {/* <Seller/> */}
  {/* <Counsoller/> */}
 
    </div>
  );
}

export default App;
