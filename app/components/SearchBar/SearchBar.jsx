import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
   render (){
      return (
         <div className="searchbar">
            <input type="text" placeholder="What are you looking for?" />
            <button type="search" onClick={this.props.onSearch}>Find</button>
         </div>
      )
   }
}

export default SearchBar;
