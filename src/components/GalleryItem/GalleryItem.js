import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  
  state = {
    visible: true
  }

  // toggleImage = () => { 
  //   console.log('in toggleImage');
  //   if (this.state.visible === false ) {
  //     this.setState({
  //       visible: true
  //     }) 
  //   }
  //   else {
  //      this.setState({
  //        visible: false
  //      })
  //   }
  // }

  toggleImage = () => { 
    console.log('in toggleImage');
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const visible = this.state.visible;
    return (
        <section>
          {visible ? (
            <div className="frame" onClick={this.toggleImage}>
              <img src={this.props.item.path} alt={this.props.item.description}/>
            </div>
          ) : ( 
            <div className="frame" onClick={this.toggleImage}>
              <p onClick={this.toggleImage}>{this.props.item.description}</p>
            </div>
          )}
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