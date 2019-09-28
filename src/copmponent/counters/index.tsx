import React from 'react';
import Counter from '../counter'




export default class Counters extends React.Component<any, any> {

    render() {
        const {onReset, counters, onDelete, onIncrement} = this.props
        
        return (
            <div>

                <button onClick={onReset} className="btn btn-primary m-2">Reset</button> 

                {counters.map((counter: any) => (<Counter
                 key={counter.id} 
                 onDelete={onDelete} 
                 counter={counter}
                 onIncrement={onIncrement}
                 />
                 ))}
            </div>
        )
    }


}