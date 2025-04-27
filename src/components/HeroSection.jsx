import React from 'react';
import '../App.css';
import './HeroSection.css';
import PlatypusLogo from '../images/PLAT_logo_inv.png';




function HeroSection() {
    return (
    <div className='hero-container'>
    <img src={PlatypusLogo} width={800} alt='Platypus Bio logo' />
    <p>Unlocking the potential of Australian metagenomes for precision medicine.</p>
    
    </div>

    );
    
    
    
}


export default HeroSection