// Create a People component
// Render an unordered list of ["Manny", "Moe", "Jack"]
class People extends React.Component {
  render() {
    const people = this.props.data.map( (p, i) => <li key={i}>{p}</li> );
    return(
      <ul>
        {people}
      </ul>
    );
  }
}
