import React from 'react'
import { BatteryMedium, Cpu, Zap } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import ComponentCard from './components/ComponentCard'

function App() {
  const components = [
    {
      name: 'Résistance',
      description: 'Limite le flux de courant électrique dans un circuit.',
      icon: <Zap size={48} />,
    },
    {
      name: 'Condensateur',
      description: 'Stocke l\'énergie électrique dans un champ électrique.',
      icon: <BatteryMedium size={48} />,
    },
    {
      name: 'Transistor',
      description: 'Amplifie ou commute les signaux électroniques.',
      icon: <Cpu size={48} />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Composants Électriques</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <ComponentCard key={index} {...component} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App