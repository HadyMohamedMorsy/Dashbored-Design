import React from 'react';
import axios from 'axios';

import './style.scss';

class Dashbored extends React.Component{
    state = {
        data : []
    }
    componentDidMount(){
        axios.get('./data.json').then(res => this.setState({data : res.data.data}))
    }
    render(){
        const {data} = this.state;
        const alldata = data.map((item)=>{

            return(
                <tr className="t-body" key={item.id}>
                    <td>
                        {item.tabledate}

                    </td>
                    <td>{item.Product}</td>
                    <td>{item.size}</td>
                    <td>{item.Website}</td>
                    <td>{item.price}</td>
                    <td className={item.statues === "Sucees" ? "Milky" : "orange"}><span>{item.statues}</span></td>
                </tr>

            )

        })
        return(
            <div className="Dashbored">
            <div className="pop-one">
                <div className="button-pop">
                    <div className="content">
                        <h2>Transfer</h2>
                        <div className="text-content">
                            <label>Transfer to :</label>
                            <input type="text" placeholder="Enter The Email Addrese" className="input"/>
                        </div>
                    </div>
                    <div className="text-content-input">
                        <button className="cancel" onClick={this.props.pop}>Cancel</button>
                        <button className="send" onClick={this.props.buttoPop}>Send</button>
                    </div>
                </div>
                <div className="configration-email">
                    <div className="icon-message">
                        <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div className="text-content">
                        <div className="header-text"><h2>Configration Email Sent</h2></div>
                        <div className="confirm">
                            <p>we sent a link to <span>ahthony2124@email.com</span> and</p>
                            <p><span>jamesconor@email.com</span> cheack that email to confirm </p>
                            <p>the transfer</p>
                        </div>
                        <div className="last-confirm">
                            <p>Didnt get a confirmation email ?</p>
                            <p>Check you span or <span>Send Again</span></p>
                        </div>
                    </div>
                    <div className="icon-close" onClick={this.props.final}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
               </div>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                               <div className="col-4">
                                    <div className="first shape">
                                        <h3>Filter By :</h3>
                                            <div className="row-first">
                                                <div className="lock">
                                                    <span className="lock-span">1D</span>
                                                </div>
                                                <div className="lock">
                                                    <span className="lock-span">1M</span>
                                                </div>
                                                <div className="lock">
                                                    <span className="lock-span">1Y</span>
                                                </div>
                                            </div>
                                    </div>
                               </div>
                               <div className="col-4">
                                    <div className="secound shape">
                                         <h3>Total Cheack Out</h3>
                                         <div className="row-first">
                                            <div className="lock-secound">
                                                <span className="lock-span">
                                                  <div> <span className="num-one">72</span> <span className="num-two">/ 82</span></div>  
                                                </span>
                                            </div>
                                            <div className="lock-secound">
                                                <span className="lock-span">
                                                    <div className="parent-icon">
                                                        <i className="fas fa-cart-plus"></i>
                                                    </div>
                                                </span>
                                            </div>
                                         </div>
                                    </div>
                               </div>
                               <div className="col-4">
                                    <div className="thired shape">
                                    <h3>Total Faliure</h3>
                                    <div className="row-first">
                                       <div className="lock-thired">
                                           <span className="lock-span">
                                             <div> <span className="num-one">10</span> <span className="num-two">/ 82</span></div>  
                                           </span>
                                       </div>
                                       <div className="lock-thired">
                                           <span className="lock-span">
                                               <div className="parent-icon">
                                                    <i className="fas fa-cart-arrow-down"></i>
                                               </div>
                                           </span>
                                       </div>
                                    </div>
                                    </div>
                               </div>
                            </div>
                            <div className="row">
                                <table>
                                        <thead>
                                            <tr className="t-head">
                                                <th>
                                                    Data 
                                                    <i className="fas fa-chevron-up"></i>
                                                    <i className="fas fa-chevron-down"></i>
                                                </th>
                                                <th>Produect</th>
                                                <th>Size (US)</th>
                                                <th>Website</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {alldata}  
                                        </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="col-4-grid">
                            <div className="row">
                                <div className="First-local same">
                                    <div className="Text-content">
                                        <p className="p-color">Licenese Key</p>
                                        <p className="serial">xxxx-xxxx-xxxx-xxxx</p>
                                    </div>
                                    <div className="row-first">
                                    <div className="lock-thired-button"> 
                                        <div className="button">
                                            <div className="row-first special">
                                                <div className="first-button">Restart Now</div>
                                                <div className="last-button">Stripe</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lock-thired-button"><button className="last-button-only"><span>Deactive</span></button> </div>
                                    </div>
                                    <p className="p-color special">Next Renewal on 22 Mar 2021</p>
                                    <div className="eye">
                                        <i className="fas fa-eye-slash"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="secound-local nosame">
                                    <div className="row-first">
                                        <div className="Unbind">
                                            <div className="text-content">
                                                <i className="fab fa-discord"></i>
                                                <span>Discord ID</span>
                                            </div>
                                            <p>antony#2142</p>
                                        </div>
                                        <div className="Unbind">
                                            <div className="butt"><button className="last-button-only"><span>Unbind</span></button> </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="thired-local nosame">
                                    <div className="row-first">
                                        <div className="Unbind">
                                            <div className="text-content">
                                                <i className="fab fa-discord"></i>
                                                <span>Discord ID</span>
                                            </div>
                                    
                                        <div>
                                            <div>Current Email</div>
                                            antony#2142@email.com
                                        </div>
                                    </div>
                                    <div className="Unbind">
                                        <div className="butt" onClick={this.props.Transfer}><button className="onther-last" ><span>Transfer To</span> <i className="fas fa-chevron-right"></i></button> </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="forth-local different">
                                    <div className="row-first">
                                        <div className="Dowanload">
                                            <div className="desktop-borde">
                                                <div className="text-content">
                                                    <i className="fas fa-desktop"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Dowanload">
                                            <div className="button">
                                                <div className="system">
                                                    <i className="fab fa-apple"></i>
                                                        Dowanload For MACOS
                                                </div>
                                            </div>
                                            <div className="button">
                                                <div className="system">
                                                    <i className="fab fa-windows"></i>
                                                        Dowanload For Windows
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashbored;