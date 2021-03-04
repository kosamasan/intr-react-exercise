import { useState, useEffect } from 'react'
import GalleryItems from '../components/GalleryItems'

const axios = require('axios')

const populateImagesArray = (myData) => {
    const imagesPerRow = [] ;
    let start =0;
    let end =3;
    for (let i = 0; i < 3; i++) {
        imagesPerRow.push({
            row: i,
            gallery_images: myData.slice(start,end)
        });
        
        start = start +3;
        end = end + 3;
    }
    return imagesPerRow;
}

const GalleryPage = () => {
    
    const [images, setImages] = useState([]);
   
    useEffect(() => {
     
        axios.get(`https://dev.to/api/articles?per_page=9`).then(resp => {            
       
        setImages(populateImagesArray(resp.data));
           
        });

       
    }, [])


    return (
        <div>
           
        <GalleryItems galleryImages={images} />
                   
        </div>
    );
}

export default GalleryPage;