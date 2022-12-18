import React from 'react'
import './Footer.scss'

import {
    Link
  } from "react-router-dom";

function Footer() {
    return (
        <div className="section footerSection">
            <p>Situs web ini memberi petani alat pendukung keputusan penting yang menyediakan tanaman dan pupuk yang direkomendasikan untuk tanah mereka menggunakan teknik Ilmu Data dan Pembelajaran Mesin.</p>

            <div className="footerLinksDiv">
                <Link to="#section1">Beranda</Link>
                <Link to="#section3">Tentang Kami</Link>
            </div>
        </div>
    )
}

export default Footer
