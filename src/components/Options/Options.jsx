import s from "./Options.module.css" 
// import Feedback from "../Feedback/Feedback";

const Options = ({ totalFeedback, updateFeedback, feedbackReset }) => {
    return (
        <div className={s.btn_container}>
            <button className={s.btn} onClick={() => updateFeedback('good')}>Good</button>
            <button className={s.btn} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={s.btn} onClick={() => updateFeedback('bad')}>Bad</button>
            <button className={totalFeedback ? s.btn : s.hide} onClick={feedbackReset}>Reset</button>  
        </div>
    );
};

export default Options;
