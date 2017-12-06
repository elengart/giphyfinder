import React from 'react';
import ReactDOM from 'react-dom'

class GiphyGridItem extends React.Component{
  render() {
    let props = this.props;
    return (
      <img
        src={props.source}
        width={props.width}
        height={props.height}
      />
    );
  }
}

export default GiphyGridItem;
