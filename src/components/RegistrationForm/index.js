import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    isFormSubmitted: false,
    showFirstNameError: false,
    showSecondNameError: false,
  }

  onSubmitRegistrationForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName !== '' && secondName !== '') {
      this.setState({isFormSubmitted: true})
    } else if (firstName === '' && secondName !== '') {
      this.setState({
        isFormSubmitted: false,
        showFirstNameError: true,
        showSecondNameError: false,
      })
    } else if (firstName !== '' && secondName === '') {
      this.setState({
        isFormSubmitted: false,
        showFirstNameError: false,
        showSecondNameError: true,
      })
    } else {
      this.setState({
        isFormSubmitted: false,
        showFirstNameError: true,
        showSecondNameError: true,
      })
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  onBlurSecondName = event => {
    if (event.target.value === '') {
      this.setState({showSecondNameError: true})
    } else {
      this.setState({showSecondNameError: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({secondName: event.target.value})
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      isFormSubmitted: false,
      firstName: '',
      secondName: '',
    })
  }

  renderSuccessfulSubmission = () => (
    <div className="submitted-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderRegistrationForm = () => {
    const {
      firstName,
      secondName,
      showFirstNameError,
      showSecondNameError,
    } = this.state
    const errorFirstName = showFirstNameError ? 'Required' : ''
    const errorSecondName = showSecondNameError ? 'Required' : ''

    return (
      <form className="form-container" onSubmit={this.onSubmitRegistrationForm}>
        <div className="input-container">
          <label className="name" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={this.onChangeFirstName}
            placeholder="First Name"
            onBlur={this.onBlurFirstName}
            className="input-box"
          />
          <p className="error-msg">{errorFirstName}</p>
        </div>
        <div className="input-container">
          <label className="name" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            value={secondName}
            onChange={this.onChangeSecondName}
            placeholder="Second Name"
            onBlur={this.onBlurSecondName}
            className="input-box"
          />
          <p className="error-msg">{errorSecondName}</p>
        </div>
        <div className="btn-container">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <div className="registration-container">
          <h1 className="heading">Registration</h1>
          {isFormSubmitted
            ? this.renderSuccessfulSubmission()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
