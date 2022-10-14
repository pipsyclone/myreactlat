import { Fragment } from "react"
import Helmet from 'react-helmet'

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body">
                    <h2>Home</h2>
                    <span>This Content Are Home!</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;