export const Hero = () => {
    return (
      <section style={{
        height: '60vh',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1595435064219-c78338b6de4c?auto=format&fit=crop&q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Find Your Perfect Court</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Бронюй найкращі тенісні майданчики у твоєму місті за лічені хвилини.</p>
        <button style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#ccff00',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Explore Courts
        </button>
      </section>
    );
  };