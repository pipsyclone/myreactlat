import React, {Fragment, useState } from 'react'
import Helmet from 'react-helmet'

const Lat4 = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [companyName, setCompanyName] = useState("")

    const handlerSubmit = (e) => {
        e.preventDefault();

        setCompanyName(firstname + " " + lastname)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Latihan 4 - Form</title>
            </Helmet>

            <div className='card mt-5'>
                <div className='card-body'>
                    <h2>Latihan 4 - Form</h2>
                    <br/>
                    <span>Form untuk input data dan menampilkannya!</span>
                    <br/>
                    <hr/>
                    <form onSubmit={handlerSubmit}>
                        <div className='mb-3'>
                            <label>Masukkan Nama Depan :</label>
                            <input type="text" className='form-control' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label>Masukkan Nama Belakang :</label>
                            <input type="text" className='form-control' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                        </div>

                        <div>
                            <button type='submit' className='btn btn-primary rounded-0 float-end'>
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                <div className='card-footer'>
                    Nama Saya Adalah : {!companyName ? '...' : companyName}
                </div>
            </div>
        </Fragment>
    )
}

export default Lat4