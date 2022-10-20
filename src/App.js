import { Routes, Route } from 'react-router-dom'

import './assets/style.css'

import Error404 from './content/page404'
import Navbar from './content/Navbar'
import Home from './content/home'
import Lat1 from './content/lat1'
import Lat2 from './content/lat2'
import Lat3 from './content/lat3'
import Lat4 from './content/lat4'
import Lat5 from './content/lat5'
import Lat6 from './content/lat6'
import Lat7 from './content/lat7'

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className='container'>
          {/* Load Content */}
          <Routes>
            <Route path='/myreactlat' element={<Home />} />
            <Route path='/latihan-1' element={<Lat1 name="Apip Rahman Syahidan" hobi="Bultang" />} />
            <Route path='/latihan-2' element={<Lat2 />} />
            <Route path='/latihan-3' element={<Lat3 />} />
            <Route path='/latihan-4' element={<Lat4 />} />
            <Route path='/latihan-5' element={<Lat5 />} />
            <Route path='/latihan-6' element={<Lat6 />} />
            <Route path='/latihan-7' element={<Lat7 />} />
            <Route path="*" element={<Error404 code="404" status="Page Not Found!" msg="Please back to home!" />} />
          </Routes>
      </div>
    </>
  )
}

export default App;