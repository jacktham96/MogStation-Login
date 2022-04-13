import { useState } from 'react'
import './index.css'
import clsx from 'clsx';
import Logo from './images/images.jpg'


function App() {

  return (
    <main className='h-full mx-auto'>
      
      {/* Header */} 
      <header className='flex items-center justify-center gap-4 py-4 bg-black w-full'> 
        <img src={Logo} alt="Header-logo" height={50} width={50}/>
        <h1 className='text-white font-bold text-2xl'>Final Fantasy XIV : Endwalker</h1>
      </header>

      {/* Header */}  
      <div>

      </div>

    </main>
  )
}

export default App
