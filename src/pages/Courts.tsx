import { useState } from 'react';
import { CourtCard } from '../components/CourtCard';

// Додаємо export перед константою
export const MOCK_COURTS = [
  { 
    id: "1", 
    name: "Південний", 
    surface: "clay", 
    city: "Львів", 
    price: 450, 
    image: "https://images.unsplash.com/photo-1595435064219-c78338b6de4c?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    id: "2", 
    name: "Sport Life", 
    surface: "hard", 
    city: "Львів", 
    price: 600, 
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?auto=format&fit=crop&q=80&w=600" 
  }
];

export const Courts = () => {
  const [selectedCity, setSelectedCity] = useState("Всі");

  // Фільтруємо список (це прибере помилку "значение не прочитано")
  const filteredCourts = selectedCity === "Всі" 
    ? MOCK_COURTS 
    : MOCK_COURTS.filter(court => court.city === selectedCity);

  return (
    <main style={{ padding: '3rem', color: 'white' }}>
      <h1>Каталог кортів</h1>
      <div style={{ margin: '2rem 0' }}>
        <label>Фільтр по місту: </label>
        <select 
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)} 
          style={{ padding: '10px', borderRadius: '5px' }}
        >
          <option value="Всі">Всі міста</option>
          <option value="Львів">Львів</option>
          <option value="Київ">Київ</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredCourts.map(court => (
          <CourtCard key={court.id} {...court} />
        ))}
      </div>
    </main>
  );
};