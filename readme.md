# Intro to React

# Getting setup

- [ ] Install the React Dev Tools
- [x] Install the Babel Syntax Highlighter with JSX Definitions

# Dependencies

- [ ] React
- [ ] ReactDOM
- [x] Babel

# Rendering

Add the following the main.js

```
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root')
);
```

# Notes

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
        - this.props
        - this.props.name
        - etc. 
    - .bind(this)
        - "TypeError: Cannot read property of 'null'"
        - binds that particular instance to the event so that 
            this !== null
