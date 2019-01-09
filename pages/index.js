import React, { Component } from 'react'
import "../styles/main.scss"
import Head from 'next/head'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import { Spring } from 'react-spring'
import Transition from 'react-transition-group/Transition';
import { CSSTransition } from 'react-transition-group';



import HookedComponent from '../components/intro/header'



export default class Home extends Component {


    onLeave = (origin, destination, direction) => {
        console.log(destination.index);

    }

    

    render() {
        return (
            <div>
                <Head>
                    <title>Eli Marshall</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <ReactFullpage
                    navigation
                    onLeave={this.onLeave.bind(this)}
                    render={comp =>
                        (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <CSSTransition
                                        in={true}
                                        timeout={3000}
                                        onExited={() => {
                                            console.log('exited');
                                            
                                          }}
                                        >
                                        <div>test</div>
                                    </CSSTransition>
                                    <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }} delay= '1000'>
                                            {props => <div style={props}>hello</div>}
                                        </Spring>
                                    
                                   <HookedComponent />
                                </div>
                                <div className="section">section 2</div>
                                <div className="section"> section 3</div>
                                <div className="section"> section 4
                                    <Link prefetch href={{ pathname: '/project', query: { name: 'Eli' } }}>
                                        <a>Eli</a>
                                    </Link>
                                </div>
                            </ReactFullpage.Wrapper>
                        )}
                />




            </div>
        )
    }

}