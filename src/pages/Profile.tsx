export const Profile = () => {
    return (
      <main style={{ padding: '5rem', color: 'white', textAlign: 'center' }}>
        <h1>Мій профіль</h1>
        <div style={{ backgroundColor: '#252525', padding: '2rem', borderRadius: '15px', display: 'inline-block', marginTop: '2rem' }}>
          <p><strong>Ім'я:</strong> Тестовий Користувач</p>
          <p><strong>Email:</strong> test@example.com</p>
          <button style={{ 
            marginTop: '2rem', padding: '10px 20px', backgroundColor: '#ff4444', 
            color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' 
          }}>
            Delete account
          </button>
        </div>
      </main>
    );
  };