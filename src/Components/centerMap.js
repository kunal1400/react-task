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
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-top-section elementor-element elementor-element-7e20f438 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-invisible" data-id="7e20f438" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;}">
                      <div class="elementor-background-overlay"></div>
                      <div class="elementor-container elementor-column-gap-narrow">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-47a4c70b" data-id="47a4c70b" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-1f21d225 animated-slow elementor-invisible elementor-widget elementor-widget-heading" data-id="1f21d225" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="heading.default">
                <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">Enter the correct code and move to the next stage</h2>		</div>
                </div>
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-inner-section elementor-element elementor-element-3efb6745 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3efb6745" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-29fbcf40" data-id="29fbcf40" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-6eb2d2d1 animated-slow elementor-invisible elementor-widget elementor-widget-progress" data-id="6eb2d2d1" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="progress.default">
                <div class="elementor-widget-container">
                    <span class="elementor-title">Game Stages</span>

            <div class="elementor-progress-wrapper progress-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" aria-valuetext="">
              <div class="elementor-progress-bar" data-max="80">
                <span class="elementor-progress-text"></span>
                          <span class="elementor-progress-percentage">80%</span>
                      </div>
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
