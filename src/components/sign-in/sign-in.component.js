import React from 'react';
import CustomButton from '../buttons/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props
    const {email, password} = this.state

    emailSignInStart(email, password)

  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    const { googleSignInStart } = this.props
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' onClick={this.handleSubmit}> Sign in </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);