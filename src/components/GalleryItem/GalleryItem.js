import React, { Component } from 'react';

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
        <div>
          {visible ? (
            <img src={this.props.item.path} alt={this.props.item.description}
              onClick={this.toggleImage}/>
            // <button>Like it!</button>
            // <p>{this.props.item.likes} people like this!</p>
          ) : ( 
            <img alt={this.props.item.description}
              onClick={this.toggleImage}/> // need to set a up as a div or something to retain 250 x 250
            // <button>Like it!</button>
            // <p>{this.props.item.likes} people like this!</p>
          )}
        </div>
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