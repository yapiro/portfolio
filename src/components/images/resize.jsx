import React, { Component } from 'react';
import { resizeImage } from './resizeImage';

class Resize extends Component {
  state = {
    imageUri: null,
    imageFile: null,
  }

  async imageChangeHandler(e) {
    const { imageFile, imageUri } = await resizeImage(e);
    this.setState({
      imageFile,
      imageUri,
    });
  }
  
  render() {
    const { imageUri } = this.state;
    return (
      <div>
        <div>
          <input
            type="file"
            onChange={e => this.imageChangeHandler(e)}
          />
        </div>
        {
          imageUri &&
            <img src={imageUri} alt="resizedImage" />
        }
      </div>
    );
  }
}

export default Resize;