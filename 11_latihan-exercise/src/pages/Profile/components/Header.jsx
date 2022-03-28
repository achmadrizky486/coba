import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={{ background: "grey", padding: "5px 10px", marginBottom: 20 }}>
                <h1>{this.props.text}</h1>
            </div >
        )
    }
}
