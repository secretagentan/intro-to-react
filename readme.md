# Intro to React

# Getting Set Up

- [x] [Install the React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
- [x] Install the Babel Syntax Highlighter with JSX Definitions

# Dependencies

- [x] React
- [x] ReactDOM
- [x] Babel

# Rendering

Add the following the main.js

```
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root')
);
```

# Lecture Notes

- React created by engineers at Facebook in 2013
- Babel
    - Transpiler: Allows you to write future JS
    - Install Package: Babel (syntax highlighter)
    - Must include script type: 
```
<script type="text/babel" src="/main.js">
```
- DOM
    - Document Object Model
    - Structured by HTML
- JSX
    - 'HTML-like' syntax
    - Virtual DOM: DOM rendered by JavaScript
    - Doesn't change the actual DOM
- Reusable Components 
    - Properties:
        - props => outside => don't change
        - this.props, this.props.name, etc. 
        - .bind(this) method
            - "TypeError: Cannot read property of 'null'"
            - binds that particular instance to the event so that this !== null
    - States
        - state => inside => can change
        - state is a JS object
        - this.setState() method
            - changes the state and rerenders the page

# Reading

- [x] [React.Component](https://facebook.github.io/react/docs/react-component.html)

- [ ] What lifecycle method should you use to load data from a server?
```
componentWillMount()
```

- [ ] What methods get called right before something happens?
```
componentWillMount()
```

- [ ] What methods get called right after something happens?
```
componentDidMount()

```

- [ ] What method should be used to invalidate timers?
```
componentWillUnmount()
```

- [ ] What are the different ways this.setState can be called?
```
setState(nextState, callback)
```
```
this.setState({mykey: 'my new value'});
```
```
this.setState((prevState, props) => {
  return {myInteger: prevState.myInteger + props.step};
});
```

# Challenge

- [ ] Create a timer component with a start button.
- [ ] When a user clicks "Start" show number that increments every second.
```
<Timer />
```
- [ ] Create a github component that gets JSON from:
```
https://api.github.com/users/USER_NAME
```
- [ ] and renders it:
```
<Github profile="USER_NAME" />
```

# Render a User

- [ ] Check out `https://api.github.com/users/fat`. You can hit this endpoint without any further authorization.

Can you create a component `<Github user="fat" />` that:

- [ ] hits the Github API for a user's profile during the ComponentDidMount method using 'fetch', then

- [ ] sets the components state and renders a profile card?

# Render a Search Form

- [ ] Can you create a GithubSearchForm that displays an input for a Profile?

- [ ] When a user enters a profile and clicks "Enter" update the <Github /> component.

# Resources

- https://facebook.github.io/react/docs/react-component.html#componentdidmount
- https://facebook.github.io/react/docs/react-component.html#setstate
- https://facebook.github.io/react/docs/forms.html
- https://facebook.github.io/react/docs/thinking-in-react.html



