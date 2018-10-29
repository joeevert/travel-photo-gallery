import React, { Component } from 'react';
import './GalleryForm.css';

class GalleryForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Picture Link</label>
        <input value={this.props.newPic.path}
           onChange={this.props.handleChangeFor('path')} required/>
        <label>Description</label>
        <input value={this.props.newPic.description}
           onChange={this.props.handleChangeFor('description')} required/>
        <input type="submit" value="Add Picture" />
      </form>
    );
  }
}

export default GalleryForm;