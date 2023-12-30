import React, {Component} from 'react';
import './classCounter.css';

class ClassCounter extends Component{
    constructor(){
        super()
        this.state = {count:0}
    }

    handleIncrease = () => {
        this.setState({count: this.state.count + 1})
    }
    handleDecrease = () => {
        this.setState({count: this.state.count - 1})
    }
    reset = () => {
        this.setState({count:0})
    }
    render(){
        return(
            <div className='counter'>
               <h3>Class Counter</h3>
                <p>{this.state.count}</p>
                <div className='buttons'>
                    <button onClick={this.handleDecrease}>-</button>   
                    <button onClick={this.reset}>Reset</button>  
                    <button onClick={this.handleIncrease}>+</button>  
                </div>
            </div>
        )
    }
}

export default ClassCounter;