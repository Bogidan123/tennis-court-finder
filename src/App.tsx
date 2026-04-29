import { Header } from './components/Header/Header'
import { Hero } from './components/Header/Hero'
import { CourtCard } from './components/CourtCard'
import './App.css'

// Масив з даними про корти
const COURTS_DATA = [
  {
    id: 1,
    name: "Південний",
    location: "вул. Щирецька, 36, Львів",
    price: 450,
    image: "https://images.unsplash.com/photo-1595435064219-c78338b6de4c?q=80&w=600"
  },
  {
    id: 2,
    name: "Sport Life (Сихів)",
    location: "вул. Зубрівська, 38, Львів",
    price: 600,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=600"
  },
  {
    id: 3,
    name: "Корти на Погулянці",
    location: "вул. Вахнянина, 29, Львів",
    price: 350,
    image: "https://images.unsplash.com/photo-1551773188-0801da12ddae?q=80&w=600"
  }
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2rem' }}>
          Популярні корти у Львові
        </h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '2rem', 
          justifyContent: 'center' 
        }}>
          {COURTS_DATA.map((court) => (
            <CourtCard 
              key={court.id}
              name={court.name}
              location={court.location}
              price={court.price}
              image={court.image}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App