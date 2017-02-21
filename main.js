console.log('✨')
// () => window.alert('hi');

// create a SuperButton Component
// color sets the background color of the Component
class SuperButton extends React.Component {
  handleClick() {
    window.alert('hi');
  };

  render() {
    const style = {
      backgroundColor: this.props.color,
      borderRadius: 6,
      color: 'black'
    };
    return(
      <button onClick={this.handleClick} style={style}>Hello</button>
    )
  }
}

// Define a welcome class
// that renders "Hello Meow"
class Welcome extends React.Component {
  handleDoubleClick() {
    window.alert(this.props.name);
  }

  render() {
    return (
      <div onDoubleClick={this.handleDoubleClick.bind(this)} style={{color: 'white'}}>
        <p>Hello {this.props.adjective} <span>{this.props.name}</span></p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Avengers</h1>
        <Welcome adjective="pretty" name="Thor" />
        <Welcome adjective="hulky" name="Hulk" />
        <Welcome adjective="killer" name="Black Widow" />
        <SuperButton color="yellow" />

        <p>Playing with React</p>
        <p>Curly braces get evaluated as JS: {2 + 2}</p>

        <NameTag color="red" name="Iron Man" />
        <NameTag color="yellow" name="Thor" />
        <NameTag color="orange" name="Black Widow" />
        <NameTag color="green" name="Hulk" />
        <NameTag color="blue" name="Captain America" />
        <NameTag color="purple" name="Hawkeye" />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
