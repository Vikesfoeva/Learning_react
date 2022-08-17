import React, { Component } from 'react';
class Counter extends Component {

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary m-2 btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm btn-m2">
                    Delete
                </button>
            </div>
        );
    }

    // Use an arrow function such that this method is able to inherit this properly
    // This is needed because when this method is passed as an object to onclick
    // 'This' shifts to the document

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "dark";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;