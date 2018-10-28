import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {
  
  state = {
    visible: true
  }

  toggleImage = () => { 
    console.log('in toggleImage');
    if (this.state.visible === false ) {
      this.setState({
        visible: true
      }) 
    }
    else {
       this.setState({
         visible: false
       })
    }
  }

  render() {
    const visible = this.state.visible;
    return (
        <section className="picCard">
          {visible ? (
            <div className="frame" onClick={this.toggleImage}>
              <img src={this.props.item.path} alt={this.props.item.description}/>
            </div>
            // <button>Like it!</button>
          ) : ( 
            <div className="frame" onClick={this.toggleImage}>
              <p onClick={this.toggleImage}>{this.props.item.description}</p>
            </div>
          )}
          <div className="likeButton">
            <button>Like it!</button>
            <p>{this.props.item.likes} people like this!</p>
          </div>
        </section>
    )
  }
}
export default GalleryItem;

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }