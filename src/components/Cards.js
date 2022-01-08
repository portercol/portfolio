import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import sureVote from '../images/sure-vote.png';
import emote from '../images/emote.png';
import empDirect from '../images/employee-directory.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>sample dev projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={sureVote}
              text='Secure Web & Mobile-friendly voting made with facial recognition and 2FA.'
              label='Sure Vote'
              path='https://young-journey-30565.herokuapp.com/'
            />
            <CardItem
              src={emote}
              text='Analyze images, return numerical data, identify socially-perceived emotions.'
              label='Emote'
              path='https://intense-chamber-80785.herokuapp.com/'
            />
            <CardItem
              src={empDirect}
              text='A React app to search and filter a large employee directory.'
              label='Employee Directory'
              path='https://calm-crag-68916.herokuapp.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;