import React, { Component } from 'react'
import renderHTML from 'react-render-html';
import _ from 'lodash';
import FormSection from './formSection.js';
import Fullbgimage from './fullbgimage.js';
import Leftimagerightcontent from './leftimagerightcontent.js';
import Leftcontentrightmap from './leftcontentrightmap.js';
import Rightcontentleftimage from './rightcontentleftimage.js';
import Fullmap from './fullmap.js';
import CenterMap from './centerMap.js';
const data = {
  step_name: "Eight",
  data: [{
    layout: "fullbgimage",
    imageurl: "",
    heading: "Level 8",
    content: "",
  },
  {
    layout: "leftimagerightcontent",
    imageurl: "",
    heading: "",
    content: "",
  },
  {
    layout: "fullmap",
    imageurl: "",
    heading: "",
    content: "",
  },
  {
    layout: "leftcontentrightmap",
    mapurl: "",
    heading: "",
    content: "",
  },
  {
    layout: "rightcontentleftimage",
    imageurl: "",
    heading: "",
    content: "",
  },
  {
    layout: "centerMap",
    imageurl: "",
    heading: "",
    content: "",
  },
  {
    layout: "formSection",
    mapurl: "",
    heading: "",
    content: "",
  }],
  next_stepurl: "",
  answer: "",
}
class Eight extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: null,
      pageId: 4499,
      showForm: false,
      nextStepPassword: "SUNBOOKPOINT1983"
    }
  }

  componentDidMount() {
    fetch(`http://reactdemo.play-it.co.il/wp-json/created_json/v1/pages/${this.state.pageId}`)
    // fetch(`http://reactdemo.play-it.co.il/wp-json/MyPlugin/v1/pages/${this.state.pageId}/contentElementor`)
    .then(res => res.json())
    .then((result) => {
        window.scroll(0,0)
        console.log(result)
        this.setState({
          showForm: true,
          data: result.data
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
    var value = document.getElementById("eael-password").value
    if( this.state.nextStepPassword == value ) {
      console.log(e, value)
      this.props.history.push('/stage-nine');
    } else {
      alert("Password not matched")
    }
  }

  comprender (data) {
    if (data.layout === "fullbgimage") {
      return (<Fullbgimage data ={data} {...this.props}/>)
    }
    if (data.layout === "formSection") {
      return (<FormSection data ={data} {...this.props}/>)
    }
    if (data.layout === "leftimagerightcontent") {
      return (<Leftimagerightcontent data ={data} {...this.props}/>)
    }
    if (data.layout === "leftcontentrightmap") {
      return (<Leftcontentrightmap data ={data} {...this.props}/>)
    }
    if (data.layout === "fullmap") {
      return (<Fullmap data ={data} {...this.props}/>)
    }
    if (data.layout === "rightcontentleftimage") {
      return (<Rightcontentleftimage data ={data} {...this.props}/>)
    }
    if (data.layout === "centerMap") {
      return (<CenterMap data ={data} {...this.props}/>)
    }

  }

  render() {
    console.log(this.state.data, 'kkkkkkkkk')
    let self = this
    return <div>
      {_.get(this.state, 'data', []).map((data, i)=>{
          return (
            this.comprender(data)
          )
        })
      }
    </div>
  }
}

export default Eight;
