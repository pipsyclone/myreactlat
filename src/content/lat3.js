import React, {Fragment, useRef } from 'react'
import Helmet from 'react-helmet'
import Script from '../interactive/script'

function Lat3() {

    const {linkRef, gotoTop} = Script()

    return (
        <Fragment>
            <Helmet>
                <title>Latihan 3 - useRef</title>
            </Helmet>

            <div className='card mt-5'>
                <div className='card-body'>
                    <h2>Latihan 3 - useRef</h2>
                    <br/>
                    <span>Berfungsi untuk scroll dari bawah ke atas!</span>
                    <br/>
                    <hr/>
                    <span ref={linkRef}>This Top!</span>
                    <br />
                    <br />
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
                    <br />
                    <button className='btn btn-sm btn-primary rounded-0 mb-3' onClick={() => gotoTop(linkRef.current)}>Go To Top</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Lat3;