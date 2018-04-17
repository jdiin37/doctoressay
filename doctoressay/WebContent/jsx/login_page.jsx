class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          account:"",
          pswd:"",
          visible:true
        };
        
        this.handleChange_A = this.handleChange_A.bind(this);
        this.handleChange_P = this.handleChange_P.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange_A(event) {
        this.setState({account: event.target.value});
    }

    handleChange_P(event) {
        this.setState({pswd: event.target.value});
    }
    
    handleSubmit(event) {
        alert('account: ' + this.state.account + " password: " + this.state.pswd);
        if(true){
//            this.setState(prevState => ({
//                visible: !prevState.visible
//              }));
            renderMain(this.state.account);       
        }
        //window.location = "main.html";
        event.preventDefault();
    }
       
    render() {
        const logincss = {
                'width': '400px',
                'margin':'auto',
                'margin-top': '100px'
              };
        if( !this.state.visible) {
            return null
        }      
        return (               
          <div className="panel panel-default" style={logincss}> 
                <div className="panel-heading">Please Sign In</div>
                <div className="panel-body">
                  <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                          <input className="form-control" placeholder="Account"
                            name="account"  
                            type="text"
                            value={this.state.account}
                            onChange={this.handleChange_A} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password"
                        name="pswd"
                        type="text"
                        value={this.state.pswd}
                        onChange={this.handleChange_P} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                        </label>
                    </div>
                    <input type="submit" value="Login" className="btn btn-success btn-block"/>      
                  </form>
                </div>
          </div>        
        );
      }   
}

