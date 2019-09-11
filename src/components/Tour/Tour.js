import React, { Component } from 'react'
import './Tour.scss'


export default class Tour extends Component {
state={
    showInfo: false
};
handleInfo=()=>{
    this.setState({
        showInfo:!this.state.showInfo
    })
}

    render() {
        const { id, city, name, img, info } = this.props.tour;
        const { removeTour }= this.props;
        return (
           
            <article>
                <div className="img-container">
                    {/* <img  src="https://images.pexels.com/photos/2110175/pexels-photo-2110175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>  */}
                    <img src={ img } alt=""/>
                    <span className="close-btn" onClick={()=>{removeTour(id)}}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{ city }</h3>
                    <h4>{ name }</h4>
                    <h5>
                        info{' '}
                        <span onClick={this.handleInfo}>
                           <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                  { this.state.showInfo &&   <p>{ info }</p> }
                </div>
            </article>
        )
    }
}
