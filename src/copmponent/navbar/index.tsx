import React from 'react';


export default class Navbar extends React.Component<any, any> {
    render() {

        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Total-counters <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a>
            </nav>
        )
    }
} 