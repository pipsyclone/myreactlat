import React, {Fragment, useRef } from 'react'
import Helmet from 'react-helmet'

function Lat3() {

    const linkRef = useRef(null)
    const gotoBot = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>Latihan 3 - useRef</title>
            </Helmet>

            <div className='card mt-5'>
                <div className='card-body'>
                    <h2>Latihan 3 - useRef</h2>
                    <br/>
                    <span>Berfungsi untuk scroll dari atas ke bawah!</span>
                    <br/>
                    <hr/>
                    <button className='btn btn-sm btn-primary rounded-0 mb-3' onClick={() => gotoBot(linkRef.current)}>Go To Bottom</button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo accusamus beatae asperiores, magni dicta cumque nemo excepturi soluta id ea maxime? Amet similique rem sapiente dignissimos voluptatibus, est quas.
                    </p>
                    <br/>
                    <span ref={linkRef}>This Bottom!</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Lat3;