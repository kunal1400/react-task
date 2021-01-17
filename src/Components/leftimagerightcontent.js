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
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-top-section elementor-element elementor-element-46e440a3 elementor-section-height-min-height animated-slow elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-invisible" data-id="46e440a3" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:350}">
                      <div class="elementor-background-overlay"></div>
                      <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-16a32388" data-id="16a32388" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-39932804 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="39932804" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                  <div class="elementor-text-editor elementor-clearfix"><p dir="ltr">The name Udaipur means &quot;city of sunrise&quot;. Udaipur is located on the banks of Lake Pichola in the southern region of Rajasthan. It is one of the most picturesque and romantic cities in India, and is often called &quot;Venice of the East&quot;.</p><p dir="ltr">Go for a tour of this majestic city. Which film was shot at this location?</p></div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-27742645" data-id="27742645" data-element_type="column">
              <div class="elementor-column-wrap">
                      <div class="elementor-widget-wrap">
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
