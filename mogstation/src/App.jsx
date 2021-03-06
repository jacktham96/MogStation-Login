import { useState } from 'react'
import './index.css'
import clsx from 'clsx';
import Logo from './images/images.jpg'

function Header({children , className}) {
  return(
    <header className={clsx(
      'gap-4 py-1 bg-black w-full',
      className
    )}>
      {children}
    </header>
  )
}


function Card({children, className}) {

  return(
    <div className={clsx(
      'p-4 w-full text-center', 
      className
    )}>
      {children}
    </div>
  )
}

function Button({children, className}) {
  return(
    <button className={clsx(
      'rounded-xl text-center py-4 font-bold	text-xl',
      className
    )}>
      {children}
    </button>
  )
}

function TextField({id , label}) {
  const [value ,setValue] = useState('')

  return(
    <div className='relative mt-5'>
      
      {/* 當 Label 不是空字串的時候 , Label 消失*/}
      < label htmlFor="id-name" 
        className={clsx('absolute px-3 ' , value !== '' && 'opacity-0')}>
        {label}
      </label>
      
      <input 
      type="text" 
      name={id}
      id={id}
      className='border rounded-md max-w-xl w-full px-4 outline-none'
      onChange={event => setValue(event.target.value)}
      />
    </div>
  )

}





function App() {

  const links = [
    {textLink : 'link1' , text : '> Enhancing security with one-time passwords.' },
    {textLink : 'link2' , text : '> How to remove the software token or software authenticator from your account.' },
    {textLink : 'link3' , text : '> Forgot your ID or password?' },
    {textLink : 'link4' , text : '> What is a Square Enix account?' },
  ]
  const [avtive, setActive] = useState();

  return (
    <div className='h-full m-0 mx-auto leading-normal '> 

      {/* Header */}
      <Header className='flex items-center justify-center'>
        <img src={Logo} alt="Header-logo" height={50} width={50}/>
        <h1 className='text-white font-bold text-2xl'>Final Fantasy XIV : Endwalker</h1>
      </Header>

      
      {/* Service Banner */} 
      <div className='text-center space-y-6 pt-6'>
        <img className='max-w-[85%] m-auto' src="https://cache.secure.square-enix.com/oauth/content/image/en/ffxiv_mog/mogstation_logo_na.png"/>
        <div className='max-w-[50%] m-auto'>      
          <p>Various services are available here, including upgrading to the 
            full version of the game, adding game time, 
            registering various types of codes, and purchasing additional services.</p>
        </div>
      </div>

      {/* Main */} 
      <div>
     
        {/* Article */} 
        <article className='py-10 mx-auto text-center'>
          <p>Log in to the FINAL FANTASY XIV: Mog Station.</p>
          <p>Please enter your Square Enix ID and password.</p>
        </article>
        
        {/* Content Box */} 
        <section className='max-w-[50%] mx-auto mb-3'>
          {/* Content Box - Header */} 
          <Header>
            <h1 className='text-white font-bold text-xl py-2 px-5'>Log In</h1>
          </Header>
          
          {/* Content Box - Login Form */} 
          <div>
            <Card className='bg-white text-black '>
              <form className='space-y-5 '>
                  {/* Name */}
                  <TextField id='id-name' label='Square Enix ID'/>
                  <TextField id='password' label='Square Enix Password'/>
              
              <Button className='text-white max-w-xs w-full bg-red '>
                <img className='inline px-2' src="https://cache.secure.square-enix.com/account/content/flat/responsive/img/login/icon/login.png?ver=15202222042818"/>
                <span>Log In</span>
              </Button>

              </form>

              <ul className='mt-10 text-left max-w-[70%] m-auto'>
                {links.map((link)=>(
                  <li className='py-2 w-full'>
                    <a 
                    href={link.textLink}
                    onClick={() => setActive(link)}
                    className='font-bold'
                    >
                    {link.text}</a>
                  </li>
                ))}
              </ul>
              
              <hr className='my-9 h-1 bg-black'/>
              
              <div className='space-y-5'>
                <Button className='text-white max-w-2xl	 w-full bg-blue '>
                  <img className='inline px-2' src="https://cache.secure.square-enix.com/account/content/flat/responsive/img/login/icon/signup.png?ver=15202222042818"/>
                  <span>Register</span>
                </Button>

                <ul>
                  <li>
                    < a href="#"
                      onClick={(event) => {
                        event.preventDefault()
                      }}
                      className='font-bold'
                    >
                      SQUARE ENIX Support Center
                    </a>
                  </li>
                </ul>
              </div>



            </Card>
          </div>

        </section>
      </div>


    </div>
  )
}

export default App
