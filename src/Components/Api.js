import React from 'react'
import {useState, useEffect} from 'react'

import Card from 'react-bootstrap/Card'
import axios from 'axios'
import './style.css'


function Api(){
    
    const [dt,setData]=useState([])

    useEffect(()=>{
        async function fetchData() {
            const req = await axios.get("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=a&numResults=10");
            setData(req.data.results);
        
        }
        fetchData();
        console.log(dt);
    }, []);
    

    
    return (
        
       <div>
           <h1>Get api call</h1>
            {
             dt.map(element=>
                (
             <div>
             
             
            
         
             <Card className='Card'>
             <div className='upper-video'>
             <h3 align="center">{element.heading}</h3>
             <video  width="300px" height="200px" controls autoplay>
                 <source src={element.video} type="video/mp4"/>
                 Your browser does not support the video tag
             </video>
             
             </div>
             <ul>
             <li>{element.tags[0]}</li>
             <li>{element.tags[1]}</li>
             <li>{element.tags[2]}</li>
             </ul>
            
  </Card>
 
            
             
             
            </div>
             ))} 
       </div>
       
        
)
}
export default Api;

