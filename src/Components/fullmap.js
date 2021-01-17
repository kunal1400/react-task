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
                <section data-particle_enable="false" data-particle-mobile-disabled="false" class="elementor-section elementor-top-section elementor-element elementor-element-7f0808e8 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-invisible" data-id="7f0808e8" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:500}">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a2ef4df" data-id="7a2ef4df" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-2da95f56 elementor-widget elementor-widget-text-editor" data-id="2da95f56" data-element_type="widget" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                  <div class="elementor-text-editor elementor-clearfix"><iframe src="https://www.google.com/maps/embed?pb=!4v1606892758639!6m8!1m7!1saXeIrU5XtzAPVSMX0hqCtw!2m2!1d24.57512642064053!2d73.68020156010539!3f19.66!4f-13.75!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
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
