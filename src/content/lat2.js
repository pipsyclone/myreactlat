import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'

const Lat2 = () => {
    const [getNumber, setNumber]    = useState(1);
    const [pacarSaya, setPacarSaya] = useState("");

    const increseHandler = () => {
        setNumber((prev) => prev + 1)
    }

    const decreseHandler = () => {
        if (getNumber <= 1) {
            alert('Tidak bisa dikurangi lagi!');
        }else{
            setNumber((prev) => prev - 1)
        }
    }

    useEffect(() => {
        if (getNumber >= 5) {
            setPacarSaya("Apip Rahman Syahidan")
        }else if (getNumber <= 5) {
            setPacarSaya("")
        }
    }, [pacarSaya, getNumber])

    return (
        <Fragment>
            <Helmet>
                <title>Latihan 2 - useState & useEffect</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body">
                    <h2>Latihan 2 - useState & useEffect</h2>
                    <span>Permainan Data menggunakan useState & useEffect</span>
                    <br/>
                    <hr/>
                    <span>Pacar Saya Adalah : {!pacarSaya ? "Hayoo Tebak!" : pacarSaya}</span>
                    <br/>
                    <span>Tambah Pacar Saya : {getNumber} Pacar</span>
                    <br/>
                    <div className='mt-3'>
                        <button className='btn btn-sm btn-success rounded-0' onClick={() => increseHandler()}>
                            Tambah Pacar
                        </button>
                        <button className='btn btn-sm btn-danger rounded-0 ms-3' onClick={() => decreseHandler()}>
                            Kurangi Pacar
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Lat2;