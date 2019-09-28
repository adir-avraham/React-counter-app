import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';






export default class Counter extends React.Component<any, any> {


    render() {
        

        return (
            <div> 
               
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
                <button className="btn btn-danger m-2" onClick={()=>
                    this.props.onDelete(this.props.counter.id)}>
                    Delete</button>
            </div>
        )   
    }
    

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter
        return value === 0 ? "Zero" : value; 
    }


} 