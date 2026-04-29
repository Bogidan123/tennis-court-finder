export const Header = () => {
    return (
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '1rem 2rem', 
        background: '#242424',
        color: 'white' 
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>TennisFinder</div>
        <nav>
          <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Sign In</button>
        </nav>
      </header>
    );
  };