import {Fragment} from'react'
import Helmet from 'react-helmet'
import Script from '../interactive/script'

const Lat5 = () => {

    // Pemanggilan function hasil return dari file script
    const {
        text,
        color, 
        changeColor
    } = Script()

    return (
        <Fragment>
            <Helmet>
                <title>Latihan 5 - Best Practices</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body">
                    <h2>Latihan 5 - Best Practices</h2>
                    <span>Membuat function dengan berbeda file!</span>
                    <br/>
                    <hr/>
                    <span className={color ? color : ''}>{text ? text : 'Change text!'}</span>
                    <br/>
                    <br/>
                    {/* <button className='btn btn-primary me-3' onClick={() => changeText()}>Change Text</button> */}
                    <button className='btn btn-success me-3' onClick={() => changeColor()}>Change Color</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Lat5;