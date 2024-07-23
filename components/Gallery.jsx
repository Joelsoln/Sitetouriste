import React from 'react';
import Image from 'next/image';
import G1 from '@/public/G1.webp';
import G2 from '@/public/G2.webp';
import G3 from '@/public/G3.webp';
import G4 from '@/public/G4.webp';
import G5 from '@/public/G5.webp';
import G6 from '@/public/G6.webp';
import G7 from '@/public/G7.webp';
import G8 from '@/public/G8.webp';
import G9 from '@/public/G9.webp';
import G10 from '@/public/G10.webp';
import G11 from '@/public/G11.webp';
import G12 from '@/public/G12.webp';
import G13 from '@/public/G13.webp';
import G14 from '@/public/G14.webp';
import G15 from '@/public/G15.webp';
import G16 from '@/public/G16.webp';

export default function Gallery() {
  return (
    <>
      <div className="row justify-content-center">
        <h2 className="text-center">Galerie photos</h2>
      </div>
      <br />
      <div className="row">
        <div className="col-3 mb-3"><Image src={G1} alt="G1" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G2} alt="G2" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G3} alt="G3" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G4} alt="G4" className="img-fluid" /></div>
      </div>
      <div className="row">
        <div className="col-3 mb-3"><Image src={G5} alt="G5" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G6} alt="G6" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G7} alt="G7" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G8} alt="G8" className="img-fluid" /></div>
      </div>
      <div className="row">
        <div className="col-3 mb-3"><Image src={G9} alt="G9" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G10} alt="G10" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G11} alt="G11" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G12} alt="G12" className="img-fluid" /></div>
      </div>
      <div className="row">
        <div className="col-3 mb-3"><Image src={G13} alt="G13" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G14} alt="G14" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G15} alt="G15" className="img-fluid" /></div>
        <div className="col-3 mb-3"><Image src={G16} alt="G16" className="img-fluid" /></div>
      </div>
      <div style={{ marginBottom: '50px' }}></div> {/* Espace en bas */}
    </>
  );
}
