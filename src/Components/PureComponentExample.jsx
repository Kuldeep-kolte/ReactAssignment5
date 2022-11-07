import React, { PureComponent } from 'react'
import HighOrderComponent from './HighOrderComponent';

export default class PureComponentExample extends PureComponent {
    constructor()
    {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1 className=''>Assignment 5</h1>
                    <p>This is an example of pure component where it updates by comparing previous primitive props values but not any other non-primitive values</p>
                    <ul>
                        <li>If you click on first button only the left count will increase "because it repesents inner functionality"</li>
                        <li>If you click on the second button nothing happens because we are trying to pass handler to the pure component so it will not change</li>
                    </ul>
                <h4>{this.state.count}</h4>
                <button className='btn btn-warning' onClick={()=>this.setState({count:this.state.count+1})}>First Count</button><br /><br />
                <button className='btn btn-warning'  onClick={()=>this.setState({count:this.state.count})}>Second Count</button>
                <hr />
                <p>Below is the demonstration for Higher order component</p>
                <ul>
                    <li>Both buttons are separate components</li>
                    <li>although they are two different components but they share same functional code</li>
                    <li>Here we can see the by using the higher order components we can avoid coding same function multiple times</li>
                </ul>
                <HighOrderComponent />
                </div>
               
            </>
        )
    }
}
