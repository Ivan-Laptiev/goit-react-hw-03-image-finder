import { PropTypes } from 'prop-types';
import css from './ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"


 export default function ImageGallery ({photos, onClick}){
    return( 
        <ul className={css.ImageGallery}>
      {photos.map(({id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem  
          key={id} 
        webformatURL={webformatURL}
        tags={tags}
        onClick = {() => onClick(largeImageURL, tags)}
        />
      
       ))}
    </ul>
    )
    }

    ImageGallery.propTypes ={
      photos : PropTypes.array,
      tags : PropTypes.array
    }