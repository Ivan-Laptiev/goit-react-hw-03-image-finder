import { PropTypes } from 'prop-types';
import { Component } from "react";
import { ImSearch } from 'react-icons/im'
import css from './Searchbar.module.css'

class Searchbar extends Component {
    
    state = {
        inputValue : "",
    };

    handleChange = evt => {
        this.setState({ inputValue: evt.target.value });
    }

    handleSubmit = e => {
      e.preventDefault();

      if (this.state.inputValue.trim() === ""){
        return ;
      }
      //console.log(`Poshuk : ${this.state.inputValue}`)

      this.props.onSubmit(this.state.inputValue);
      //this.setState({inputValue : ""}); 
      e.target.reset();
    }


    render(){
   
    return(

        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
          <ImSearch size ={30}/>
          </button>
      
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            // value={inputValue} 
            onChange={this.handleChange}            
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>

    )
    };
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}