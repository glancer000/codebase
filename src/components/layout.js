import React, { Component } from 'react'

import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import Nav from '../components/nav/nav'

import SideDrawer from '../components/sideDrawer/sideDrawer'
import Backdrop from '../components/backdrop/backdrop'



class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }

      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }

    render(){
        let sideDrawer;
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
            sideDrawer = <SideDrawer />
        }
    

    return(
        <div style={{ height: '100%' }}>
        {sideDrawer}
        {backdrop}
            <Nav drawerClickHandler={this.drawerToggleClickHandler} />
                <div className={layoutStyles.container}>
                    {this.props.children}
                </div>
            <Footer/>
        </div>
    )
}
}

export default Layout