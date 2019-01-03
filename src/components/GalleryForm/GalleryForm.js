import React, { Component } from 'react';
import './GalleryForm.css';

class GalleryForm extends Component {

  render() {
    return (
      <section className="form">
        <h3>Add Pictures</h3>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>Picture Link</label>
            <input 
              placeholder="image url..."
              value={this.props.newPic.path}
              onChange={this.props.handleChangeFor('path')} required/>
          </div>
          <div>
            <label>Description</label>
            <input 
              placeholder="image description..."
              value={this.props.newPic.description}
              onChange={this.props.handleChangeFor('description')} required/>
          </div>
          <input className="addButton" type="submit" value="Add Picture" />
        </form>
      </section>
    );
  }
}

export default GalleryForm;