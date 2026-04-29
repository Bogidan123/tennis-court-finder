import { Hero } from './components/Header/Hero'
import { Header } from './components/Header/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero /> {/* Ось цей рядок обов'язково має бути тут! */}
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Tennis Court Finder</h1>
        <p>Почни пошук найкращих кортів вже зараз.</p>
      </main>
    </>
  )
}

export default App