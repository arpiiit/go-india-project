import React from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Header3 from '../components/Header3';
import Compo from '../components/Compo';
import Offcanva from '../components/Offcanva';


const Home = () => {
    return (
        <div>
            
        <div>
         <Header/>
         <Header2/>
         <Header3/>
         <Compo/>
         
        </div>
        <div className='display: center-container'>
        <Offcanva/>
        </div>
        

        
        </div>
    );
}

export default Home;
