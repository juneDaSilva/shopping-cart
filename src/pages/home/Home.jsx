import '../../styles/home.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div id='home'>
      <header className='hero-wrap'>
        <div className='hero'>
          <div className='title-wrap'>
            <p>Espress Yourself</p>
          </div>
        </div>
      </header>
      <main className='home-main'>
        <div className='albanian-welcome'>Mirëseardhje</div>
        <div className='english-welcome'>WELCOME TO ESPRESS YOURESELF</div>
        <hr className='short-border' />
        <div className='blurb'>Goiânia's home of european coffee</div>
        <button className='button'>
          <Link id='menu-link' to='/menu'>
            MENU
          </Link>
        </button>
      </main>
    </div>
  );
};
