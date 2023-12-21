//import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Collection from './Collection'
//import CardSec from './CardSec';
import Banner from './Banner';
import CardAxios from './CardAxios';
import CarouselPage from './CarouselPage';


function App() {
 

  return(
    <div>

      <Collection/>
      
      <CarouselPage/>
      
      <Banner/>

      {/* <CardSec/> */}

      <CardAxios/>
      
    </div>
  )
}

export default App;
