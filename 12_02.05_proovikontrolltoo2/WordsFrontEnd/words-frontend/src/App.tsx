
import './App.css'
import { Routes, Route } from 'react-router-dom'
import WordReadout from './pages/WordReadout'
import ViewEdit from './pages/ViewEdit'
import Header from './components/Header'
import "./rules/list.css"
import AddWord from './pages/AddWord'
import Editor from './pages/Editor'

function App() {
  

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path='/words' element={ <WordReadout /> } />
            <Route path='/words/:wordID' element={ <ViewEdit /> } />
            <Route path='/edit/:wordID' element={ <Editor /> } />
            <Route path='/add' element={ <AddWord /> } />
          </Routes>
        </div>
        
      </div>
    </>
  )
}

export default App
