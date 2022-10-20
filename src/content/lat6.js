import Helmet from 'react-helmet'
import Script from '../interactive/script'

const Lat6 = () => {
    const {slice, maxItem, handleLoadMore} = Script()

    return (
        <>
            <Helmet>
                <title>Latihan 6 - Load More Item</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body">
                    <h2>Latihan 6 - Load More Item</h2>
                    <span>Meminimalkan item list yang telah di looping, lalu menampilkan item yang disembunyikan!</span>
                    <br/>
                    <hr/>
                    <div className='row mx-auto justify-content-center mt-5'>
                        {
                            slice.map((data, keyArray) => {
                                return (
                                    <div key={keyArray} className='card me-3 col-sm-3 bg-primary mb-3'>
                                        <div className='card-body text-white'>
                                            <h4>{data.name}</h4>
                                            <h5>{data.price}</h5>
                                            <p>{data.desc}</p>
                                            {data.id}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={maxItem ? 'd-none' : 'text-center'}>
                        <button className='btn btn-secondary rounded-0' onClick={() => handleLoadMore()}>
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lat6;