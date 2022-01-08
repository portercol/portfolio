import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import sureVote from '../images/sure-vote.png';
import emote from '../images/emote.png';
import empDirect from '../images/employee-directory.png';
import budgetTrack from '../images/budget-tracker.png';
import workoutTrack from '../images/workout-tracker.png';
import burger from '../images/burger-tyme.png';
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
          <ul className='cards__items'>
            <CardItem
              src={budgetTrack}
              text='A Progressive Web App that tracks transactions even when offline.'
              label='Budget Tracker'
              path='https://salty-escarpment-91898.herokuapp.com/'
            />
            <CardItem
              src={workoutTrack}
              text='Create and track daily exercise and cardio workouts.'
              label='Workout Tracker'
              path='https://fierce-hamlet-55434.herokuapp.com/'
            />
            <CardItem
              src={burger}
              text='Create, Save and Devour Burgers. See a list of both created & devoured burgers.'
              label='Burger Tyme'
              path='https://glacial-caverns-34503.herokuapp.com/'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={scheduler}
              text='Keep track of your schedule by hour & by day.'
              label='Workday Scheduler'
              path='https://portercol.github.io/Work-Day-Scheduler/'
            />
            <CardItem
              src={weather}
              text='Search for weather data, current temp, humidity, windspeed and a 5-day forecast.'
              label='Weather Dashboard'
              path='https://portercol.github.io/Weather-Dashboard/'
            />
            <CardItem
              src={password}
              text='Generate a random password with different criteria.'
              label='Password Generator'
              path='https://portercol.github.io/Password-Generator/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
