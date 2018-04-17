

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


ReactDOM.render(
  element,
  document.getElementById('example')
);

class Chosen extends React.Component {
    componentDidMount() {
      this.$el = $(this.el);
      this.$el.chosen();
    }
    
    componentWillUnmount() {
      this.$el.chosen('destroy');
    }
    
    render() {
      return (
        <div>
          <select className="Chosen-select" ref={el => this.el = el}>
            {this.props.children}
          </select>
        </div>
      );
    }
}

  function Example() {
    return (
      <Chosen>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
    );
  }

  ReactDOM.render(
    <Example />,
    document.getElementById('example_chosen')
  );
  
  
  
  ReactDOM.render(
          <AlertDismissable />,
          document.getElementById('bootstrap')
        );
