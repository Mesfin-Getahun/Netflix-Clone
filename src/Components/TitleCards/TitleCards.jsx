import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data.js'



const TitleCards = ({title, category}) => {


  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  

const handleWheel = (event) => {
  event.preventDefault();
  if (cardsRef.current) cardsRef.current.scrollLeft += event.deltaY;
}

  useEffect(()=>{
  // If TMDB token is missing or invalid, fallback to mock data
  if (!import.meta.env.VITE_TMDB_BEARER || import.meta.env.VITE_TMDB_BEARER.includes('...')) {
    console.warn('VITE_TMDB_BEARER is not set or invalid — using mock data.');
    setApiData(cards_data);
  } else {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => {
      if(res.results && res.results.length > 0) {
        setApiData(res.results);
      } else {
        setApiData(cards_data);
      }
    })
    .catch(err => {
      console.error(err);
      setApiData(cards_data);
    });
  }

  const el = cardsRef.current;
  el?.addEventListener('wheel', handleWheel);
  return () => el?.removeEventListener('wheel', handleWheel);
},[category]);


  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData?.map((card, index) => {
          return <Link to = {`/player/${card.id || index}`} className="card" key={card.id || index}>
            <img src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500`+ card.backdrop_path : card.image} alt={card.original_title || card.name || ''} />
            <p>{card.original_title || card.name}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
