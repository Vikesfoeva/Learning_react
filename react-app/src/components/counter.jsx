import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }; 

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                {this.renderTags()}
                <button onClick={this.handleIncrement} className="btn btn-secondary m-2 btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    // Use an arrow function such that this method is able to inherit this properly
    // This is needed because when this method is passed as an object to onclick
    // 'This' shifts to the document
    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        } 
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "dark";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;