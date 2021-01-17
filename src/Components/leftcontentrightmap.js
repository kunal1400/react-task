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
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-top-section elementor-element elementor-element-3c2428c5 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="3c2428c5" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-53aeffad" data-id="53aeffad" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-4378222e animated-slow elementor-invisible elementor-widget elementor-widget-text-editor" data-id="4378222e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                  <div class="elementor-text-editor elementor-clearfix"><p dir="ltr">It's time to enter the city streets. Walk down the road, and look for a place where you can buy saffron. Next to it, look for a place where you can buy maps and postcards. What is the name of the store?</p></div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1bb3f11e elementor-hidden-tablet elementor-hidden-phone" data-id="1bb3f11e" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-2db0fcfe animated-slow elementor-view-default elementor-invisible elementor-widget elementor-widget-icon" data-id="2db0fcfe" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="icon.default">
                <div class="elementor-widget-container">
                  <div class="elementor-icon-wrapper">
              <div class="elementor-icon">
              <i aria-hidden="true" class="far fa-arrow-alt-circle-left"></i>			</div>
            </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2de890ef" data-id="2de890ef" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-7bd6ddee elementor-widget elementor-widget-text-editor" data-id="7bd6ddee" data-element_type="widget" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                  <div class="elementor-text-editor elementor-clearfix"><iframe src="https://www.google.com/maps/embed?pb=!4v1606828331329!6m8!1m7!1sCAoSLEFGMVFpcE9NWGtid01RTmxiMFFpcFcyTVlFQk1uV0padVBMTWJzV1ozSjl2!2m2!1d24.57916417373896!2d73.68453384822917!3f124.11!4f-15.61!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
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
