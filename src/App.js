import React, {Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Error404 from './content/page404'
import Navbar from './content/Navbar'
import Home from './content/home'
import Lat1 from './content/lat1'
import Lat2 from './content/lat2'
import Lat3 from './content/lat3'
import Lat4 from './content/lat4'
import Lat5 from './content/lat5'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <Router>

          {/* Navbar */}
          <Navbar />

          {/* Load Content */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/latihan-1' element={<Lat1 name="Apip Rahman Syahidan" hobi="Bultang" />} />
            <Route path='/latihan-2' element={<Lat2 />} />
            <Route path='/latihan-3' element={<Lat3 />} />
            <Route path='/latihan-4' element={<Lat4 />} />
            <Route path='/latihan-5' element={<Lat5 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  )
}

export default App;