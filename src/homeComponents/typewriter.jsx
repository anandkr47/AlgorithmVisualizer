import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-3">
                 <span className="badge badge-dark" style={{ color: '#DA70D6' }}>
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms',"8 Queen"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;