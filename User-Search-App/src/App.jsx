// import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Search from './components/search'

function App() {


  return (
  
    <div className='w-100 h-screen bg-gray-light dark:bg-tetiaryBlack ' >
      <div className='w:[90%] md:w-[60%] lg:w-[45%] m-auto pt-[10rem] flex flex-col gap-5 overflow-hidden'>
        <Header/>
        <Search/>
        <Card/>
      </div>
    </div>
    
  )
}

export default App
