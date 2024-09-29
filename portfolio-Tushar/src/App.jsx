import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <main className='bg-slate-300/20'>
      <Router>
        Navbar
        <Routes></Routes>
        <Route path="/" element= { 'Home'} />
        <Route path="/about" element= { 'Home'} />
        <Route path="/project" element= { 'Home'} />
        <Route path="/" element= { 'Home'} />
      </Router>
    
    </main>
    </div>
  )
}

export default App