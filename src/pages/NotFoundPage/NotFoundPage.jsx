import { Link, useLocation } from 'react-router-dom';
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
    const location = useLocation();

    return (
        <div className={s.div}>
         <h2> Sorry... Page is not found </h2>
          <Link to='/' state={location} className={s.link_back}> Back to main page </Link>
      </div>
  )
}

export default NotFoundPage