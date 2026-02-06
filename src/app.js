// src/App.jsx
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <img src="https://via.placeholder.com/150" alt="Profile" style={{ borderRadius: '50%' }} />
      <h1>jmcordoba</h1>
      <p>Full Stack Developer | Coffee Lover</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <a href="https://github.com/jmcordoba" style={linkStyle}>GitHub</a>
        <a href="https://linkedin.com/jmcordoba" style={linkStyle}>LinkedIn</a>
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  backgroundColor: '#007bff',
  padding: '10px 20px',
  borderRadius: '5px',
  width: '150px'
};

export default App;