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
    const style = {
      fontSize: '50px',
      width: '70px'
    }
    return (
      <button style={style} onClick={this.handleClick}>{this.state.counter}</button>
    );
  }
}

ReactDOM.render(
  <User />,
  document.querySelector('#root')
);
