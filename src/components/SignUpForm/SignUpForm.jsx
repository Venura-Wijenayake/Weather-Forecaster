import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="min-h-screen flex justify-center items-center">
        {/* Centered container */}
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm" className="block text-gray-600">Confirm</label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={disable}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            >
              SIGN UP
            </button>
          </form>
          {this.state.error && <p className="mt-4 text-red-500">{this.state.error}</p>}
        </div>
      </div>
    );
  }
}
