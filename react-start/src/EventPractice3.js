import React, { Component } from 'react';

export default class EventPractice3 extends Component {
    state = {
        message: '',
    };

    handleChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: '',
        });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
ㅌ;
