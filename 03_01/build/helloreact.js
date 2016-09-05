var HelloReact = React.createClass({displayName: "HelloReact",
  render: function(){
    return (
      React.createElement("div", null,
          React.createElement("h1",null, "Hello React"),
          React.createElement("p", null, "Welcome to React")
        )
      );
  }
});
ReactDOM.render(React.createElement(HelloReact, null), document.getElementById('myDiv'))
