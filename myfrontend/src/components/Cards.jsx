import React from 'react'
import st from './Card.module.css'


const Cards = (props) => {

  return (
    <div className={st.card}> 
      <div><img alt='empty' key={props.id} src={props.src}/></div>
      <div className={st.info}>
        <div>status: {props.status}</div>
        <div>name: {props.name}</div>
        <div>srecies: {props.species}</div>
      </div>
    </div>
  );
}

export default Cards;
