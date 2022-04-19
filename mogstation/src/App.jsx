import { useState } from 'react'
import './index.css'
import clsx from 'clsx';
import Logo from './images/images.jpg'


function App() {

  return (
    <main className='h-full m-0 mx-auto'> {/* Line Height*/}  
      
      {/* Header */} 
      <header className='flex items-center justify-center gap-4 py-4 bg-black w-full'> 
        <img src={Logo} alt="Header-logo" height={50} width={50}/>
        <h1 className='text-white font-bold text-2xl'>Final Fantasy XIV : Endwalker</h1>
      </header>

      {/* Header */}  
      
      {/* Service Banner */} 
      <div className='text-center block '>
        <img className='max-w-[85%] m-auto' src="https://cache.secure.square-enix.com/oauth/content/image/en/ffxiv_mog/mogstation_logo_na.png"/>
        <div className='max-w-[50%] m-auto'>       {/* Padding*/}  
          <p>Various services are available here, including upgrading to the 
            full version of the game, adding game time, 
            registering various types of codes, and purchasing additional services.</p>
        </div>
      </div>

    </main>
  )
}

export default App
