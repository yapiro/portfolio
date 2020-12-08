import React, { Component } from 'react';
import { resizeImage } from './resizeImage';
import './resize.css';

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
          <label>
            <input　className = "input"
              type="file"
              onChange={e => this.imageChangeHandler(e)}
            />ファイルを選択する
          </label>  
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