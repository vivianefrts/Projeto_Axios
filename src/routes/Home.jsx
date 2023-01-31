import axios from "axios";

import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import "./Home.css"

const Home = () => {

  return <main className="home">
      <h1>Home</h1>
      
      <div className='container-carousel'>
        <div>

        </div>
      </div>
  </main>;
  
}
export default Home;