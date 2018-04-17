class TopToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          account:props.account,         
          visible:props.visible
        };
        
        this.handleClick_Logout = this.handleClick_Logout.bind(this);
    }
    
    handleClick_Logout(event) {
        alert('Logout account: ' + this.state.account );
        if(true){
//            this.setState(prevState => ({
//                visible: !prevState.visible
//            }));
            ReactDOM.render(
                    <LoginPage />,
                    document.getElementById('root')
            );             
        }
        event.preventDefault();
    }

       
    render() {
        const pr10 = {
                'padding-right':'10px'
                };
        const mb4 = {
                'margin-bottom':'4px'
                };       
        
        if( !this.state.visible) {
            return null
        }      
        return (
                <div className="panel panel-default" style={mb4}>
                    <div className="panel-body">
                        <span className="btn">Doctor essay</span>
                        <div className="pull-right">
                            hello,<span style={pr10}>{this.state.account}</span>
                            <input type="button" value="Logout" className="btn btn-warning" onClick={this.handleClick_Logout}/> 
                        </div>
                    </div>
                </div>
                         
        );
      }   
}

