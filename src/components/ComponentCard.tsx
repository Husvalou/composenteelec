import React, { ReactNode } from 'react'

interface ComponentCardProps {
  name: string
  description: string
  icon: ReactNode
}

const ComponentCard: React.FC<ComponentCardProps> = ({ name, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default ComponentCard