console.log('hello from state.js');

// Create a Counter component that renders a button
// Add it to App's render
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (evt) {
    this.setState({
      counter: this.state.counter + this.props.incr
    })
  }
  render() {
    const counterStyle = {
      width: '50px',
      borderRadius: '4px',
      display: 'block',
      marginTop: '2%'
    }
    return(
      <button style={counterStyle} onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}

class App extends React.Component {
  render() {
    const counters = [1,2,3].map( (n, i) => <Counter key={i} incr={n} />);
    return(
      <div>
        <h1>People</h1>
        <People data={["Manny", "Moe", "Jack"]} />
        <h1>Counter</h1>
        {counters}
        <Counter incr={1} />
        <Counter incr={5} />
        <Counter incr={10} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
