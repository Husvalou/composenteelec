import React from 'react'
import { Zap } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap size={24} />
          <span className="text-xl font-bold">ElectroExplorer</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Accueil</a></li>
            <li><a href="#" className="hover:underline">Composants</a></li>
            <li><a href="#" className="hover:underline">À Propos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header