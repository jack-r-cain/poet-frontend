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
import Oneliners from './pages/Oneliners'
import Oneliner from './pages/Oneliner'
import CreateOneliner from './pages/CreateOneliner'
import EditOneliner from './pages/EditOneliner'

function App() {
  return (
    <>
      <Shell>
        <Header
          title='Poet'
          routes={[
            { label: 'Home', href: '/' },
            { label: 'Poems', href: '/poems' },
            { label: 'One Liners', href: '/one-liners' },
            { label: 'Create', href: '/create' },
            { label: 'Create One Liner', href: '/create-oneliner' },
          ]}
        />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/poems' element={<Poems />} />
            <Route path='/poems/:id' element={<Poem />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/one-liners' element={<Oneliners />} />
            <Route path='/one-liners/:id' element={<Oneliner />} />
            <Route path='/create-oneliner' element={<CreateOneliner />} />
            <Route path='/edit-one-liner/:id' element={<EditOneliner />} />
          </Routes>
        </Main>
        <Footer />
      </Shell>
    </>
  )
}

export default App
