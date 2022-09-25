import { PropTypes } from 'prop-types';
import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({webformatURL, tags, onClick}){
    return (
         <li className={css.ImageGalleryItem} onClick={onClick}>
          <img className={css.ImageGalleryItemImage} src= {webformatURL} alt={tags} />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    tags: PropTypes.array,    
    onClick: PropTypes.func.isRequired,
  };
  