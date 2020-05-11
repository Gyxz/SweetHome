import React from 'react';  
import 'D:/Maks/polit/js/Cours/sweethome/src/App.css'

class Popup extends React.Component {  
  render() {  
return (  
    <div className='popup'>  
        <div className='popup_inner'>  
            <h1>{this.props.text}</h1>  
            <button onClick={this.props.closePopup} className="popup_button">Noice</button>  
        </div>  
    </div>  
);  
}  
}  

export default Popup;