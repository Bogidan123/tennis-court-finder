import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_COURTS } from './Courts'; 

export const CourtDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  // Додаємо : any, щоб прибрати червону лінію під 'c'
  const court = MOCK_COURTS.find((c: any) => c.id === id);

  if (!court) {
    return <div style={{ color: 'white', padding: '5rem' }}>Корт не знайдено 🎾</div>;
  }

  return (
    <main style={{ padding: '3rem', color: 'white', maxWidth: '1000px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/courts')} 
        style={{ 
          marginBottom: '2rem', background: 'none', color: '#ccff00', 
          border: '1px solid #ccff00', padding: '10px 20px', 
          cursor: 'pointer', borderRadius: '8px' 
        }}
      >
        ← Назад до списку
      </button>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'start' }}>
        <img 
          src={court.image} 
          alt={court.name} 
          style={{ width: '50%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
        />
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{court.name}</h1>
          <p style={{ fontSize: '1.5rem', color: '#ccff00', fontWeight: 'bold' }}>{court.price} грн/год</p>
          <div style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <p><strong>Покриття:</strong> {court.surface}</p>
            <p><strong>Місто:</strong> {court.city}</p>
            <p><strong>Адреса:</strong> вул. Прикладна, 10</p>
          </div>
          <button style={{ 
            marginTop: '2.5rem', padding: '15px 40px', backgroundColor: '#ccff00', 
            color: 'black', fontWeight: 'bold', border: 'none', 
            borderRadius: '12px', cursor: 'pointer', fontSize: '1.1rem'
          }}>
            Забронювати корт
          </button>
        </div>
      </div>
    </main>
  );
};