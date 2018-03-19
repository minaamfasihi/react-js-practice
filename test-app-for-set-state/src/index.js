import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bindfunc from './util.js';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }

        // this.incrementCounter = this.incrementCounter.bind(this);
        bindfunc.call(this, ["incrementCounter"]);
    }

    incrementCounter() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count); // always occurs after this.setState is complete
        });
        console.log(this.state.count);

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        const { count } = this.state;
        return(
            <section>
                {count}
                <button onClick={this.incrementCounter}>
                    Add
                </button>
            </section>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

