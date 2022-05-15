import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Cards from './Cards'
import './style.css'


function Api() {

    const [dt, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=a&numResults=10");
            setData(req.data.results);

        }
        fetchData();

    }, []);



    return (


        <div className="main">

            {

                dt.map(element=>
                 
                (
                    <div key={element.heading}  className='cd'>
                        <Card className='Card-grp mb-4' style={{ width: '18rem', border: "none", }}>
                            <div className='upper-video'>
                                <h2 align="center">{element.heading}</h2>
                                <video width="287px" height="200px" controls>
                                    <source src={element.video} type="video/mp4" />
                                    Your browser does not support the video tag
                                </video>

                            </div>
                            
                                <h4 style={{padding:"0 0 0 10px"}}>{element.tags[0]}</h4>
                                <h4 style={{padding:"0 0 0 10px"}}>{element.tags[1]}</h4>
                                <h4 style={{padding:"0 0 0 10px"}}>{element.tags[2]}</h4>
                                
                            

                        </Card>
                    </div>
  ))}
        </div>


    )
}
export default Api;

