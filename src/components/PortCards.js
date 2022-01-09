import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import sureVote from '../images/sure-vote.png';
import emote from '../images/emote.png';
import empDirect from '../images/employee-directory.png';
import budgetTrack from '../images/budget-tracker.png';
import workoutTrack from '../images/workout-tracker.png';
import scheduler from '../images/workday-scheduler.png';
import weather from '../images/weather-dashboard.png';
import password from '../images/password-generator.png'

export default function PortCards() {
  return (
    <div className='cards'>
      <h1>dev projects</h1>
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
          <ul className='cards__items'>
            <CardItem
              src={budgetTrack}
              description='A progressive web app that tracks financial transactions online and offline.'
              tech='tech: JavaScript | Node.js | Express.js | MongoDB'
              label='Budget Tracker'
              path='https://salty-escarpment-91898.herokuapp.com/'
            />
            <CardItem
              src={workoutTrack}
              description='Create and track daily exercise workouts and view your history through a dashboard.'
              tech='tech: JavaScript | Node.js | Express.js | MongoDB'
              label='Workout Tracker'
              path='https://fierce-hamlet-55434.herokuapp.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={scheduler}
              description='Create, save and delete appointments with the hourly workday scheduler.'
              tech='tech: JavaScript | jQuery | Moment.js | Bootstrap'
              label='Workday Scheduler'
              path='https://portercol.github.io/Work-Day-Scheduler/'
            />
            <CardItem
              src={weather}
              description='Search for weather data, current temp, humidity, windspeed and a 5-day forecast.'
              tech='tech: JavaScript | jQuery | Bootstrap | OpenWeatherMap API'
              label='Weather Dashboard'
              path='https://portercol.github.io/Weather-Dashboard/'
            />
            <CardItem
              src={password}
              description='Generate a random password with specific criteria depending on your needs.'
              tech='tech: JavaScript | HTML5 | CSS'
              label='Password Generator'
              path='https://portercol.github.io/Password-Generator/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
