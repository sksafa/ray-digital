import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <div className='content'>
                    <h2 className='text-center pt-3'>To Do App</h2>
                    {children}
                </div>
            <Footer />
        </>
    )
}

export default Layout