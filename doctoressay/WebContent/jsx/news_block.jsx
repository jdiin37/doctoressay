class NewsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
          visible:props.visible
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        
        event.preventDefault();
    }

       
    render() {
        const blockstyle = {
                'min-width':'300px',
                'padding':'5px',    
                };    
        
        if( !this.state.visible) {
            return null
        }      
        return (
                <div className="float-right" style={blockstyle}>
                    <div className="panel panel-default ">
                        <div className="panel-heading">News</div>
                        <div className="panel-body">
                            <div>
                                <p>news1</p>
                                <p>news2</p>
                                <p>news3</p>
                            </div>
                        </div>
                    </div>
                </div>            
                         
        );
      }   
}

