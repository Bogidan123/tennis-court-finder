import { Hero } from '../components/Header/Hero';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Hero />
      <section style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#1a1a1a', color: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>How it works</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '3rem' }}>🔍</div>
            <h3>Знайди корт</h3>
            <p>Обирай найкращий варіант у твоєму місті</p>
          </div>
          <div>
            <div style={{ fontSize: '3rem' }}>📅</div>
            <h3>Забронюй</h3>
            <p>Обери зручний час та дату</p>
          </div>
          <div>
            <div style={{ fontSize: '3rem' }}>🎾</div>
            <h3>Грай</h3>
            <p>Отримуй задоволення від гри</p>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', padding: '3rem', borderTop: '1px solid #333' }}>
          <h2>Ready to play?</h2>
          <Link to="/courts" style={{
            display: 'inline-block', marginTop: '1.5rem', padding: '15px 40px',
            backgroundColor: '#ccff00', color: 'black', borderRadius: '30px',
            fontWeight: 'bold', textDecoration: 'none'
          }}>
            Find Courts
          </Link>
        </div>
      </section>
    </>
  );
};