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
      borderRadius: 4
    };
    return(
      <button onClick={this.handleClick} style={style}>Hi</button>
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
      <div onDoubleClick={this.handleDoubleClick.bind(this)} style={{color: 'turquoise'}}>
        <p>Hello {this.props.adjective} <span>{this.props.name}</span></p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Welcome adjective="pretty" name="Thor" />
        <Welcome adjective="hulky" name="Hulk" />
        <Welcome adjective="killer" name="Black Widow" />
        <SuperButton color="hotpink" />
        <p>Playing with React</p>
        <p>Curly braces get evaluated as JS: {2 + 2}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
