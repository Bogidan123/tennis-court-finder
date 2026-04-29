export const CourtCard = ({ name, price, location, image }: any) => {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        overflow: 'hidden',
        width: '300px',
        textAlign: 'left',
        backgroundColor: '#1a1a1a',
        color: 'white'
      }}>
        <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <div style={{ padding: '1rem' }}>
          <h3>{name}</h3>
          <p style={{ color: '#aaa' }}>{location}</p>
          <p style={{ fontWeight: 'bold', color: '#ccff00' }}>{price} грн/год</p>
          <button style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#ccff00',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Забронювати
          </button>
        </div>
      </div>
    );
  };