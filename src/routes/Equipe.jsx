import React from 'react';

import "./Equipe.css"

import blogFetch from '../axios/config';

import {useState, useEffect} from 'react';

const Equipe = () => {
  const [team, setTeam] = useState([])
    const getTeam = async() => {
      try{
        const response = await blogFetch.get('/Usuarios');
        const data = response.data;

        setTeam(data);
      } catch(error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getTeam()
    }, [])
    return (
      <div className='team-main-container'>
        <h1>Equipe</h1>
        <div className='team-card-container'>
          {team.length === 0 ? (<p>Carregando...</p>) : (
            team.map((team) => (
              <div className='team-card' key={team.id}>
                <h2>{team.nome}</h2>
                <h2>{team.cargo}</h2>
              </div>
            )
            )
          )
          }
        </div>
      </div>
    ) 
}




export default Equipe;