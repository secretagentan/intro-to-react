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
