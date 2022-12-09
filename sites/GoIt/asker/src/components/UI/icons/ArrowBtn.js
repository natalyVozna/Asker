import React from 'react';

const ArrowBtn = ({className}) => (
  <svg className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path style={{fillRule: "evenodd", clipRule: "evenodd"}} d="M15.0002 30C23.2842 30 29.9999 23.2841 29.9999 15C29.9999 6.71571 23.2842 3e-05 15.0002 3e-05C6.71589 3e-05 -9e-05 6.71571 -9e-05 15C-9e-05 23.2841 6.71589 30 15.0002 30Z"/>
    <path style={{fillRule: "evenodd", clipRule: "evenodd", fill: "white"}} d="M8.81238 13.6874H17.8718L13.9007 9.71645C13.5806 9.39617 13.5852 8.88322 13.9108 8.56848C14.2367 8.25415 14.7588 8.25883 15.0789 8.57889L20.9356 14.4358C20.9711 14.4713 20.9711 14.5287 20.9356 14.5643L15.0688 20.4312C14.7542 20.7459 14.2459 20.7459 13.9313 20.4312C13.617 20.1168 13.6155 19.6071 13.9289 19.2913L17.8718 15.3126H8.81238C8.36316 15.3126 7.99992 14.9494 7.99992 14.5C7.99992 14.0507 8.36316 13.6874 8.81238 13.6874Z" />
  </svg>
);

export default ArrowBtn;
