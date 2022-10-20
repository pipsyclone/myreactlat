import Helmet from 'react-helmet'

const Error404 = (props) => {
    return (
        <>  
            <Helmet>
                <title>{props.status} {props.code}</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body text-center">
                    <h2>{props.status} {props.code}</h2>
                    <span>{props.msg}</span>
                </div>
            </div>
        </>
    )
}

export default Error404