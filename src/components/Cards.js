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
              description='Secure web and mobile-friendly voting made with facial recognition and 2FA.'
              tech='tech: React.js | Express.js | Passport.js | Nodemailer | Azure API'
              label='Sure Vote'
              path='https://young-journey-30565.herokuapp.com/'
            />
            <CardItem
              src={emote}
              description='Analyze images, return numerical data and identify socially-perceived emotions.'
              tech='tech: JavaScript | Express.js | Passport.js | Imgur API | MySQL'
              label='Emote'
              path='https://intense-chamber-80785.herokuapp.com/'
            />
            <CardItem
              src={empDirect}
              description='Using different criteria you can search and filter through an employee directory.'
              tech='tech: React.js | Node.js | React-Bootstrap | MDB React'
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