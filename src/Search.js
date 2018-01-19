import React, {Component} from 'react'

class Search extends Component {
    render () {
        return (
            <div className="Search">
                <form onSubmit={this.props.onSubmitQuery}>
                    <input type="text" placeholder="Search" onSubmit={this.props.handleSearchInput}/>
                    <input className="submit" type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search
