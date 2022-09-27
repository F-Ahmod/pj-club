import React, { useEffect, useState } from 'react';
import Gallerys from './Gallerys';
import "./Gallery.css"
//import { Spinner } from 'react-bootstrap';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
  return (
    <div>
      <h4>Gallery</h4>
      <div  className='containerrr p-5'>
      {
                gallery.map(gallery => <Gallerys
                    gallery={gallery}
                   ></Gallerys>)
            }
      </div>
      {/* <div class="card-group m-3 ">
        <div class="card me-3">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div class="card me-3">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div class="card me-3">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div class="card me-3">
          <img src={img} class="card-img-top" alt="..." />
        </div>
      </div> */}
      
    </div>
  );
};

export default Gallery;
