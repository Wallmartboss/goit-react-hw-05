import s from "./Feedback.module.css"; 

const Feedback = ({ feedbacks, totalFeedback, perc_positive }) => {
   
    return (
        <ul >
            <li className={s.list}>Good : {feedbacks.good}</li>
            <li className={s.list}>Neutral : {feedbacks.neutral}</li>
            <li className={s.list}>Bad : {feedbacks.bad}</li>
            <li className={s.list}>Total : {totalFeedback}</li>
            <li className={s.list}>Positive : {perc_positive}% </li>
        </ul>
    );
};
    
export default Feedback;