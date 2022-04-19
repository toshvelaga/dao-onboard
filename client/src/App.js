import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Onboarding from './containers/Onboarding/Onboarding'
import Members from './containers/Members/Members'
import Settings from './containers/Settings/Settings'
import PageNotFound from './containers/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/members' element={<Members />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
