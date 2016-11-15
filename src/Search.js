import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      query: ''
    }
  }
  handleChange(e){
    this.setState({
      query: this.state.query
    })
  }
    handleSubmit(e) {
      console.log("clicked")
        event.preventDefault()
    }

  render() {
    return (
      <div>
      <h1>Search</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.query} onChange={this.handleChange} />
      <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}


export default Search
