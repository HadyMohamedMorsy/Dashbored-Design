import React from 'react';
import './style.scss';

class Notification extends React.Component{
    render(){
        return(
            <div className="notfication">
                <div className="container">
                    <div className="row">
                        <div className="users-lg">
                            <div className="notfication-flex">
                                <span className="span-notfication">
                                <div className="not" onClick={this.props.notifcation}>
                                    <i className="fas fa-bell"></i>
                                    <span className="orange"></span> 
                                </div>
                                    <div className="notfication-div">
                                        <div className="content-notfication">
                                            <h2>Notfication</h2>
                                            <div className="content-notification-lests">
                                                <div className="first">
                                                    <div className="parent-icon">
                                                            <div className="chiled-icon">
                                                                <i className="fas fa-check"></i>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="secound"> 
                                                    <div className="first-p">Transfer link confirmed  <span className="by"> by</span></div>
                                                    <div className="onther-p">jamesconor@email.com</div>
                                                    <div className="onther-p">just now</div>
                                                </div>
                                            </div>
                                            <div className="content-notification-lests">
                                            <div className="first">
                                                <div className="parent-icon">
                                                        <div className="chiled-icon">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="secound"> 
                                                <div className="first-p">Transfer link confirmed  <span className="by"> by</span></div>
                                                <div className="onther-p">anthony2124@email.com</div>
                                                <div className="onther-p">2 min ago</div>
                                            </div>
                                        </div>
                                        <div className="content-notification-lests">
                                        <div className="first">
                                            <div className="parent-icon">
                                            <i className="fas fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="secound"> 
                                            <div className="first-p">confirmation Email sent  <span className="by"> to</span></div>
                                            <div className="onther-p">anthony2124@email.com and</div>
                                            <div className="onther-p">jamesconor@email.com</div>
                                            <div className="onther-p">5 min ago</div>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="span-notfication-last">
                                   <img src="./1.jpg" alt="" />
                                   <div className="users">
                                        <div className="user-chiled">Hady Mohamed</div>
                                        <div className="user-chiled">Hady812012@gmail.com</div>
                                   </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Notification;
//                            