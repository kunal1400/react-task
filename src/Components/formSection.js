import React, { Component } from 'react'
import renderHTML from 'react-render-html';

class FormSection extends Component {

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
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-4332eca5 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4332eca5" data-element_type="section">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4f506330" data-id="4f506330" data-element_type="column">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div className="elementor-element elementor-element-722116fe elementor-invisible elementor-widget elementor-widget-eael-protected-content" data-id="722116fe" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="eael-protected-content.default">
                  <div className="elementor-widget-container">
                    <div className="eael-protected-content-message">
                      <div className="eael-protected-content-message-text"></div>
                    </div>
                    <div className="eael-password-protected-content-fields">
                      <form onSubmit={this.submitForm.bind(this)} method="post">
                        Password: {this.state.nextStepPassword}
                        <input type="password" name="protection_password_722116fe" id="eael-password" placeholder="Enter Password" />
                        <input type="submit" className="eael-submit" value="Submit" />
                      </form>
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
  }
}

export default FormSection;
