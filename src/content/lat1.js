import { Fragment } from 'react'
import Helmet from 'react-helmet'

const Lat1 = (props) => {
    return (
        <Fragment>
            <Helmet>
                <title>Latihan 1 - Props</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body">
                    <h2>Latihan 1 - Props</h2>
                    <span>Props ini dikirim dari property yang bernama name & hobi dari file App.js</span>
                    <br/>
                    <hr/>
                    <span>My Name Is : {props.name}</span>
                    <br/>
                    <span>My Hobi Is : {props.hobi}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Lat1;