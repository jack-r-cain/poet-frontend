import { Routes, Route } from 'react-router'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Shell from './components/layout/Shell'
import Create from './pages/Create'
import Home from './pages/Home'
import Poems from './pages/Poems'
import Poem from './pages/Poem'
import Edit from './pages/Edit'

function App() {
  return (
    <>
      <Shell>
        <Header
          title='Poet'
          routes={[
            { label: 'Home', href: '/' },
            { label: 'Poems', href: '/poems' },
            { label: 'Create', href: '/create' },
          ]}
        />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/poems' element={<Poems />} />
            <Route path='/poems/:id' element={<Poem />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Main>
        <Footer />
      </Shell>
    </>
  )
}

export default App
