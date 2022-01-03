import React from 'react'
import Logo1 from '../static/img/logos/1.png'
import Logo2 from '../static/img/logos/2.png'
import Logo3 from '../static/img/logos/3.png'
import Logo4 from '../static/img/logos/4.png'
import Logo5 from '../static/img/logos/5.png'
import Logo6 from '../static/img/logos/6.png'
import Logo7 from '../static/img/logos/7.png'
import Logo8 from '../static/img/logos/8.png'
import Logo9 from '../static/img/logos/9.png'

export default function Clients() {
    return (
        <> 
            <section className='clients'>
                <div className='slide'><img src={Logo1} alt="Logo"/></div>
                <div className='slide'><img src={Logo2} alt="Logo"/></div>
                <div className='slide'><img src={Logo3} alt="Logo"/></div>
                <div className='slide'><img src={Logo4} alt="Logo"/></div>
            </section>
        </>
    )
}
