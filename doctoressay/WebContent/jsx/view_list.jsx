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
          },
          listItems:null
        };
        
        this.handleClick = this.handleClick.bind(this);
        
    }      
    
    componentDidMount(){
        //console.log(this.state.postdata);       
        const self = this;
        var request = $.when(ajax_Post(this.state.postdata)).done(function(data) {                                
            if (data.status == "Success") {
               self.setState({ listItems : data.resultSet }); 
            } else {
                ajaxErrMsg = data.errorMessage;
            }   
        });
 
        request.onreadystatechange = null;
        request.abort = null;
        request = null;
        
    }
          
    handleClick(event) {        
        event.preventDefault();
    }

       
    render() {
        let viewitem = <div>444</div>;
        
        if(this.state.listItems){
            viewitem = (
                <div>
                    {this.state.listItems.map((item) =>
                        <ViewItem desc={item.start_date}>
                        </ViewItem>
                    )}
                </div>
              );            
        }
        if( !this.state.visible) {
            return null
        }           
        
        
        return (
                <div className="row pre-scrollable">
                    <div className="col-sm-12">
                        {viewitem}
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
