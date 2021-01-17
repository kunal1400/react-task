import React, { Component } from 'react'
import renderHTML from 'react-render-html';
import _ from 'lodash';
import FormSection from './formSection.js';

class Eight extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: "",
      error: null,
      pageId: 4499,
      showForm: false,
      nextStepPassword: "SUNBOOKPOINT1983"
    }
  }

  componentDidMount() {
    fetch(`http://reactdemo.play-it.co.il/wp-json/wp/v2/pages/${this.state.pageId}`)
    // fetch(`http://reactdemo.play-it.co.il/wp-json/MyPlugin/v1/pages/${this.state.pageId}/contentElementor`)
    .then(res => res.json())
    .then((result) => {
        window.scroll(0,0)
        console.log(result)
        this.setState({
          showForm: true,
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
    var value = document.getElementById("eael-password").value
    if( this.state.nextStepPassword == value ) {
      console.log(e, value)
      this.props.history.push('/stage-nine');
    } else {
      alert("Password not matched")
    }
  }

  render() {
    return <div>
      { renderHTML(`
            <div data-elementor-type="wp-page" data-elementor-id="4499" class="elementor elementor-4499" data-elementor-settings="[]">
              <div class="elementor-inner">
                <div class="elementor-section-wrap">
                  <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-top-section elementor-element elementor-element-24460253 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-invisible" data-id="24460253" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;background_video_link&quot;:&quot;https:\/\/www.youtube.com\/watch?v=uFEq-CB0Ev8&quot;,&quot;background_video_end&quot;:150,&quot;background_play_on_mobile&quot;:&quot;yes&quot;,&quot;background_video_start&quot;:25}">
                    <div class="elementor-background-video-container">
                            <div class="elementor-background-video-embed"></div>
                            </div>
                      <div class="elementor-background-overlay"></div>
                  <div class="elementor-container elementor-column-gap-default">
                  <div class="elementor-row">
              <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40610ad1" data-id="40610ad1" data-element_type="column">
          <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                <div class="elementor-element elementor-element-29a1483a elementor-widget elementor-widget-heading" data-id="29a1483a" data-element_type="widget" data-widget_type="heading.default">
            <div class="elementor-widget-container">
          <h1 class="elementor-heading-title elementor-size-default">${_.get(this.props, 'data.heading', '')}</h1>		</div>
            </div>
            <div class="elementor-element elementor-element-39f73bf6 elementor-widget elementor-widget-spacer" data-id="39f73bf6" data-element_type="widget" data-widget_type="spacer.default">
            <div class="elementor-widget-container">
              <div class="elementor-spacer">
          <div class="elementor-spacer-inner"></div>
        </div>
            </div>
            </div>
                </div>
              </div>
        </div>
                    </div>
              </div>
        </section>
                </div>
              </div>
            </div>
        `) }
    </div>
  }
}

export default Eight;
