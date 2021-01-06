import React, { Component } from 'react'
import renderHTML from 'react-render-html';

class Eight extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: "",
      error: null,
      pageId: 4504
    }
  }  

  componentDidMount() {
    fetch(`http://reactdemo.play-it.co.il/wp-json/wp/v2/pages/${this.state.pageId}`)
    .then(res => res.json())
    .then(
      (result) => {
        window.scroll(0,0)
        console.log(result)
        this.setState({
          content: result.content.rendered
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  submitForm(e) {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return <div>
      { renderHTML(this.state.content) }      
    </div>
  }
}

export default Eight;
