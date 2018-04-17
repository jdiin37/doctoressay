class ViewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
          visible:true,
          postdata:{
              serviceName:'EMRViewListService',
              parameters:'{"empNo":' + 'ORCL' + ',"sessionID":'
                  + '0' + ',"chartNo":' + '912473'
                  + ',"years":' + '5'
                  + ',"method":"getEmrViewListByYearsChartNo"}'
          } 
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        console.log(this.state.postdata);
    }
    
    
    handleClick(event) {
        
        event.preventDefault();
    }

       
    render() {
       
        if( !this.state.visible) {
            return null
        }      
        return (
                <div className="row pre-scrollable">
                    <div className="col-sm-12">
                        <div>
                            <ViewItem desc="105/04/05 XXX brabrabra.."/>
                        </div>
                    </div>
                </div>
                         
        );
      }   
}

class ViewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                
          visible:true
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        
        event.preventDefault();
    }
      
    render() {
       
        if( !this.state.visible) {
            return null
        }      
        return (
                <div className="panel panel-info">
                    <div className="panel-heading">
                        {this.props.desc}
                    </div>
                </div>
                         
        );
      }   
}
