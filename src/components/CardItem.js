import React from 'react';
// import Button from '@mui/material/Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a
          className='cards__item__link'
          href={props.path}
          target='_blank'
          rel='noopener noreferrer'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          {/* <Button style={{ backgroundColor: '#242424' }} variant="contained" size="medium">
            view repo
            <a href='https://github.com/portercol/sure-vote'></a>
          </Button> */}
        </a>
      </li>
    </>
  );
}

export default CardItem;
