import React from 'react'
import './style.css'
import Cards from './Cards';
import Api from './Api'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios'



const Header = () => {

  const[loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);
  const [Head,setHead]=useState("");


 
useEffect(()=>{
  const loadPosts=async ()=>{
    setLoading(true);
    const response =await axios.get("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=a&numResults=50");
    setPosts(response.data);
    setLoading(false);
  }
  loadPosts();
},[]);




  return (
    <>
       <img className='image' style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUAAADxO2HvPWGqLUP1PWIZCAr4QGH2QF47DBlrGi7nOFqlLEEDAQMaCAz0PWTzPV/BME/7PWXWNFc+ERkABAD5QGWCJTX8QGFDEB2DIjetKkPANFDQM1TVNlTbM1NnHC1EEBmsK0lSFyNbGyqLKj+OKD/uP119JDhgICl2JDaJITc1FBgqDBMRCAvkO2EgCQ8zDBSaKD98IzJwIS1JHyqnKkq1MFDKN08ADAQdBQopDxQzFxpoHC1RFyW5Mk9ADhv7MsTnAAAExElEQVR4nO3c21bbOBQGYGmP6rQmtazUwuQAJBTMYSAlUNqhQ5n3f6uxM3MZKzPd0dp2+L9LWKvo73akWCelAAAAAAAAAAAAAAAAAAAAAPbK0XgynY02OD45OZVuHN98kfrEJnYT7Q+lm8d2NvNGtzFl7wMWr3XtWgPuQQU/U3v9av2v4NgF4pHpfwXPPWXtAfeggudl4BHtfwWH6iKxFKhg3wM2FQx+Bvv/iF6U7QXU62GikG4izzgJ5duDTmZcBob5fRjox1mgF7WVu5RuIFewgpayq7qn7bVr0zZMGLK2nN33vpNpHyZIJ+lYun1sly3vEsZY40Y30s3jO3fZZulxfvO7dOt2oLj92EK6ZQAAAADwBvzzwnf3Ppb5rXDA2svipEpiKZdfJF+ah0rdP5ELLsHwUHonmK92twisEO4gH6XvZAM+2tD0/S4iCr9bTtqXl3bCpMK9TJ7oqAXUdC8bcOajxtNkPgkHDC9P8Jkj2YBTE7MT1dqaM+GAoWX6XUgkA9bfMSZxH9FMe9HtUkO18HE7UW0fJQMqdWApbkLpNbhV5IHeJteyAQ9D+xB2wJjPwgGj9qJWN4uMoh68ifkZdJX0IuOji9TJZNraxC2bRUbRZeKHclAOoijLZPYk/DWmHgiLD9F8/dL8hZ6v8gMAAABAdMM38JXxdLz6raMmOXPrY12+6zwrk8R0ky3PueX7kMZcBeUyyZj72pUnFDxhIMuWN6pg7Y+/W3a4fnVAu2JW8GPa4frVBivmAYeOV3DgV6x4tWWnK2iqBTtgpyto3RM34EmnA1Ylu4KjLgckmy0Us5c57nJATeU3bgWPO93JaDflfpOZdbuCLudW8Hu3K2hfuScZO17BbMatYB51lZCL3HdWuqLZDyQdIoDIscfBPPJeBA6q3+TYOxkmtv53Okgbo8nT6g9evKFa1C/00hMTmxGNXl+49VPF3Y/ndx0lvOcbAAAAAOBt6MJC+9UiH6WxLH+IZqv/fy9nvuSchgrODNXvv7IBlTpMvbXVr+fT4Q3kzVk90af06Jh1SGE9RxFk/pSMp9SN4c0+bk1IP2UDrmd2eAmDv23O6one1feNfU4omJCMuZKMV1eQfRgxmE8bL3xW74kbMPwZJO0fhAOGb5z9TwmDv/bsHU88K+5Rti2dDFnh+xZXcTsZTf5CNmDw5vUd5NMJe0MQz2X0Ch5IxivUtWN2MsF89ZdcL/wZfGGfl93Si1bC5xFPIy6EExkaLArZYeKMe7VJaKA3icmFL/5QV/xN31nLz50zswvp1916IDyIZXX4s+d3fgMAAADsi2GbLiygxcU7Zifu39bPx6tpvtnrHuw+fJyScy3vTdbMpZvH9pD6qmp588209HWeXEN1NgrNCxD1PGBzV1/4kMpf0g3kKdQkODVH1POASuXhq+ys9MQTT9EcwgmsEmZWeh8CX/iUkZW+M5ipqaANzG9n1vc7YC0Pzo5XPa+gWlcwxB11Y8varyq2VJD2oILBgEZ6LxBXU8H2vUS2ssv3vX5C1ZZhwvKPSspaDxMtFWyCu9FX6SaytX0GiarE58J3Pu/CLHEbeTp5vXyWbt0OPM/nnza63YPJim163n8CAAAAAAAAAAAAAAAAAADA//c3AUB7At/9kj4AAAAASUVORK5CYII=" />
      <div className="container">
      <FontAwesomeIcon icon={faUser} />
      </div>
        <h1 align="center" >SocialBoat</h1>

      
      <form className="form d-flex justify-content-center align-items-center">
            <input type="text" style={{width:"30%"}} onChange={(e)=> setHead (e.target.value)}   placeholder="Search Here"/>
            <button className="btn text-light col-lg-1" style={{background:"#E23744",marginLeft:"5px"}}>Search</button>
        </form>
        <Cards/>
        
        



    </>






  )
}

export default Header