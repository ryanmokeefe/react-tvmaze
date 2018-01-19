import React, {Component} from 'react';
import Search from './Search';
import Results from './Results'


const shows = [
    {
      "name":"The Office",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg"
    },
    {
      "name":"Radiant Office",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/101/254702.jpg"
    },
    {
      "name":"The Office",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg"
    },
    {
      "name":"Mr. Box Office",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/97/244942.jpg"
    },
    {
      "name":"The Queen of Office",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/58/146476.jpg"
    },
    {
      "name":"No Offence",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/48/121682.jpg"
    },
    {
      "name":"Oficer",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73047.jpg"
    },
    {
      "name":"Trzeci oficer",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73053.jpg"
    },
    {
      "name":"Line Offline: Salaryman",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/57/143508.jpg"
    },
    {
      "name":"Utenai Keikan",
      "image":"http://static.tvmaze.com/uploads/images/medium_portrait/42/106093.jpg"
    }
  ]


class SearchContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            shows,
            hasSearched: false,
            query: '',
            showsQuerried: []
        };
        this.onSubmitQuery = this.onSubmitQuery.bind(this); 
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.onSubmitReturn = this.onSubmitReturn.bind(this);
    }

    handleSearchInput (e) {
        // e.preventDefault()        
        this.setState({
            query: e.target.value
        }) 
        console.log('query: ' + this.state.query)
    }
    
    onSubmitQuery (e) {
        e.preventDefault()
        // find shows that match query
        
        // this.state.shows.filter((show) => {
        //     return show.title.includes(this.state.query)
        // })

        // shows: this.props.query,
        this.setState({
            hasSearched: true
        })

    }

    onSubmitReturn () {
        // e.preventDefault()
        this.setState({
            hasSearched: false,
            query: ''
        })
    }



    render () {

        return (
            <div> 
                { this.state.hasSearched ? <Results shows={this.state.shows} onSubmitReturn={this.onSubmitReturn} /> : <Search handleSearchInput={this.handleSearchInput} query={this.state.query} showsQuerried={this.state.showsQuerried} onSubmitQuery={this.onSubmitQuery} />
                }
            </div>
        )
    }
}


export default SearchContainer
