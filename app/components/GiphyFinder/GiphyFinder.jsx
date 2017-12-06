import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import GiphyGrid from 'GiphyGrid';
import SearchBar from 'SearchBar';
import Actions from '../../flux/actions.js';
import Store from '../../flux/store.js';

class GiphyFinder extends React.Component {
    constructor() {
      super();
      Actions.getTrending();
      debugger;
      this.state = {
        gifs: Store.getGifs()
      }
   }

   handleSearch() {
     console.log('handle search');
     Actions.searchGifs();
   }

   seachResultChanged = () => {
     console.log('search result changed');
     this.setState({
       gifs: Store.getGifs()
     });
   }

   componentDidMount() {
     Store.listen(this.seachResultChanged);
   }

   componentWillUnmount() {
     Store.unlisten(this.seachResultChanged);
   }

   render() {
      return (
          <Main>
            <h1>Giphy Finder</h1>
            <SearchBar onSearch={this.handleSearch} />
            <h2>Trending</h2>
            <GiphyGrid className="trending" gifs={this.state.gifs}/>
            <h2>Results</h2>
            <GiphyGrid className="usersearch" gifs={this.state.gifs}/>
          </Main>
      );
   }
}

export default GiphyFinder;
