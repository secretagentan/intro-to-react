console.log('✨')
// () => window.alert('hi');

class NameTag extends React.Component {

  render() {
    const tagStyle = {
      backgroundColor: this.props.color,
      height: '240px',
      width: '360px',
      textAlign: 'center',
      color: 'white',
      borderRadius: '14px'
    }
    const helloStyle = {
      margin: '12px 0 0 0',
      paddingTop: '4px'
    }
    const myNameIsStyle = {
      margin: '0',
      paddingBottom: '10px'
    }
    const nameFieldStyle = {
      backgroundColor: 'white',
      height: '58%',
      fontSize: '40px',
      color: 'black',
      paddingTop: '20px'
    }
    return(
      <div style={tagStyle}>
        <h1 style={helloStyle}>H E L L O</h1>
        <p style={myNameIsStyle}>my name is</p>
        <div style={nameFieldStyle} id="name-field">{this.props.name}</div>
      </div>
    )
  }
}

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
