// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
// import Description from "./Description/Description";
// import Options from "./Options/Options";
// import Feedback from "./Feedback/Feedback";
// import Notification from "./Notification/Notification";


const App = () => {

  
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
      {/* <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset} />
      { totalFeedback > 0 && 
      <Feedback
        feedbacks={feedbacks}
        totalFeedback={totalFeedback}
        perc_positive={perc_positive} /> }
      { !totalFeedback && <Notification /> }  */}
        </Routes>
    </div>
  );
};

export default App;