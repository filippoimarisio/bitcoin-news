import React from 'react';
import './NewsCard.css'

const NewsCard = props => {
  const article = props.article
  return (
    <div className='card'>
      <a href={article.url} rel="noopener noreferrer" target="_blank">
        <img className='card__image' src={article.urlToImage} alt={article.title}/>
        <h1 className='card__title'>
          {article.title}
        </h1>
        <h2 className='card__author'>
          {article.author}
        </h2>
      </a>
    </div>
  );
};

export default NewsCard;