import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Modal from "components/Modal/Modal";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";
import css from './App.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchPhotos from "services/API";

export class App extends Component  {
  
  state = {
  photoName: '',
  largeImageURL: '',
  webformatURL: '',
  alt: '',
  photos: [],
  isLoading: false,
  page: 1,
  showModal: false,
  visible: false,
  };
  
    async componentDidUpdate (_, prevState){
    const prevName = prevState.photoName;
    const nextName = this.state.photoName;
    const page = this.state.page;
    const prevPage = prevState.page;
    
     if(prevName !== nextName || page !==  prevPage){
        //console.log('Изменился запрос')
        this.setState({isLoading: true});

        const response = await searchPhotos(nextName, page);        
const photos = response.hits.map(({id, tags, webformatURL, largeImageURL}) => ({
  id, tags, webformatURL, largeImageURL
})
);

photos.length > 0
          ? toast.success('Done')
          : toast.warning(' Not Found ');

photos.length > 11
          ? this.setState({ visible: true })
          : this.setState({ visible: false });
          
this.setState({isLoading: false});

this.setState(state => ({
 photos: [...state.photos, ...photos]
}))

// this.setState({isLoading: true}); 
    }
}



  handleFormSubmit = photoName =>{
    this.setState ({photoName: photoName});
    this.setState({page: 1});
    this.setState({photos: []})
  };

  onLoadMore = () =>{
    this.setState(prevState => ({
      page: prevState.page +1, visible: false
    }));
  }

  onImgClick = (largeImageURL, alt) => {
    this.setState({ largeImageURL, alt });
    this.togleModal();
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render(){
    const {photos, showModal, isLoading, largeImageURL, tags, visible} = this.state;   
   
    
  return (
    
    <div className={css.App}>     
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery photos={photos} onClick={this.onImgClick}/>
      {showModal && (
          <Modal onClose={this.togleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      {isLoading && <Loader/> }
      {visible && <Button onClick={this.onLoadMore} />}
      
      <ToastContainer />

      </div>
      
  );
  }
}