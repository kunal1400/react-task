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
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-top-section elementor-element elementor-element-7a3d3ae1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7a3d3ae1" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                      <div class="elementor-background-overlay"></div>
                      <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e08dd12 elementor-invisible" data-id="4e08dd12" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300,&quot;background_background&quot;:&quot;classic&quot;}">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-inner-section elementor-element elementor-element-5a2a1014 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5a2a1014" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-17949edb" data-id="17949edb" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-5f5af70f elementor-invisible elementor-widget elementor-widget-image" data-id="5f5af70f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                            <img src="http://reactdemo.play-it.co.il/wp-content/uploads/elementor/thumbs/ravi-n-jha-aU9yXmIwfkw-unsplash-scaled-ozxyl6sq37t1z2upoy5b0sezbjewdsbuaeg2gwtwi8.jpg" title="ravi-n-jha-aU9yXmIwfkw-unsplash" alt="ravi-n-jha-aU9yXmIwfkw-unsplash" />											</div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1b0ff4fc" data-id="1b0ff4fc" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-732a2d52 elementor-widget-divider--view-line elementor-invisible elementor-widget elementor-widget-divider" data-id="732a2d52" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider">
              <span class="elementor-divider-separator">
                    </span>
            </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-19bb1ff4" data-id="19bb1ff4" data-element_type="column">
              <div class="elementor-column-wrap">
                      <div class="elementor-widget-wrap">
                        </div>
                  </div>
            </div>
                        </div>
                  </div>
            </section>
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-inner-section elementor-element elementor-element-e6ab160 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e6ab160" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6a3c9b1f" data-id="6a3c9b1f" data-element_type="column">
              <div class="elementor-column-wrap">
                      <div class="elementor-widget-wrap">
                        </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6b30bc57" data-id="6b30bc57" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-7043dab2 elementor-widget-divider--view-line elementor-invisible elementor-widget elementor-widget-divider" data-id="7043dab2" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider">
              <span class="elementor-divider-separator">
                    </span>
            </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-28234aa5" data-id="28234aa5" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-5dedf652 elementor-invisible elementor-widget elementor-widget-image" data-id="5dedf652" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                            <img width="150" height="150" src="http://reactdemo.play-it.co.il/wp-content/uploads/2020/12/shutterstock_1465399496-1-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" />											</div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                        </div>
                  </div>
            </section>

                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-inner-section elementor-element elementor-element-5f9de560 elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5f9de560" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-11d0c707" data-id="11d0c707" data-element_type="column">
              <div class="elementor-column-wrap">
                      <div class="elementor-widget-wrap">
                        </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7aac776f" data-id="7aac776f" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-4fffaafd elementor-widget-divider--view-line elementor-invisible elementor-widget elementor-widget-divider" data-id="4fffaafd" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider">
              <span class="elementor-divider-separator">
                    </span>
            </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-69d9f51c" data-id="69d9f51c" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-2969e2b5 elementor-invisible elementor-widget elementor-widget-image" data-id="2969e2b5" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                            <img src="http://reactdemo.play-it.co.il/wp-content/uploads/elementor/thumbs/ibrahim-rifath-oLVV_o45GIA-unsplash-scaled-ozxyhm0u2wwrsi1rkwhf16wtxr1m394m4p2jq04u6o.jpg" title="ibrahim-rifath-oLVV_o45GIA-unsplash" alt="ibrahim-rifath-oLVV_o45GIA-unsplash" />											</div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                        </div>
                  </div>
            </section>
                <div class="elementor-element elementor-element-b158299 elementor-widget elementor-widget-image" data-id="b158299" data-element_type="widget" data-widget_type="image.default">
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                            <img width="1000" height="670" src="http://reactdemo.play-it.co.il/wp-content/uploads/2020/11/icelandmap.png" class="attachment-large size-large" alt="" loading="lazy" srcset="http://reactdemo.play-it.co.il/wp-content/uploads/2020/11/icelandmap.png 1000w, http://reactdemo.play-it.co.il/wp-content/uploads/2020/11/icelandmap-300x201.png 300w, http://reactdemo.play-it.co.il/wp-content/uploads/2020/11/icelandmap-768x515.png 768w" sizes="(max-width: 1000px) 100vw, 1000px" />											</div>
                </div>
                </div>
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-inner-section elementor-element elementor-element-312953fc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="312953fc" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-37af4830" data-id="37af4830" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-a7409cf elementor-invisible elementor-widget elementor-widget-text-editor" data-id="a7409cf" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                  <div class="elementor-text-editor elementor-clearfix"><p dir="ltr">The code to the next stage</p><p dir="ltr">The name of the bookstore followed in sequence by the year the film was released</p></div>
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
