// import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// import Description from "./Description/Description";
// import Options from "./Options/Options";
// import Feedback from "./Feedback/Feedback";
// import Notification from "./Notification/Notification";


const App = () => {

  
  

  return (
    <div>
      <Route>
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
        </Route>
    </div>
  );
};

export default App;