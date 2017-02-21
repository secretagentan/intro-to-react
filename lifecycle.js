console.log('hello from lifecycle.js');

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
    console.log('initialized');
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    console.log('we are rendering');
    const divStyle = {
      fontSize: '100px'
    }
    return (
      <div style={divStyle} onClick={this.handleClick}>{this.state.counter}</div>
    );
  }
}

ReactDOM.render(
  <User />,
  document.querySelector('#root')
);
