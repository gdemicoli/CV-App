import { React } from 'react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);


// import GeneralInfo from './Components/general_info.jsx'
// import CV from './Components/cv.jsx'

// A section to add general information like name, email and phone number.

// A section to add your educational experience
// (school name, title of study and date of study)

// A section to add practical experience (company name, position title,
//   main responsibilities of your jobs, date from and until when you worked for that company)

//Edit & submit button
