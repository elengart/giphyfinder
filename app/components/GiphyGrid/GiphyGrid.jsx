import React from 'react';
import ReactDOM from 'react-dom';
import GiphyGridItem from 'GiphyGridItem'

class GiphyGrid extends React.Component{
  render() {
    let {gifs, className} = this.props;
    let grid = gifs && gifs.map((item, idx)=>(<GiphyGridItem {...item} key={idx} />));
    return (
      <div className={className}>
        {grid}
      </div>
    );
  }
}

export default GiphyGrid;
