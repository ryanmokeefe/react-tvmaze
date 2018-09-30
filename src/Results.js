import React, {Component} from 'react';

class Results extends Component {
    // constructor(props) {
    //         super(props)
    //         this.state = {
    //             query,
    //         }
    //     }

    render () {

        let results = this.props.shows.map((show, index) => {
            return (
                <div key={index}>
                    <img src={show.image} alt={show.name} />
                    <p>{show.name}</p>
                </div>
            )
        })
        return (
            <div>
                {/* onClick for buttons / onSubmit for forms */}
                <button onClick={this.props.onSubmitReturn}>Return to Search</button>
                {results}
            </div>
        )
    }
}

export default Results
