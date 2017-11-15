class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);

    this.state = {
      visibility: true
    }
  }

  handleToggleVisiblity() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisiblity}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
