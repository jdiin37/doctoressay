class LeftContainer extends React.Component {
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
       
        if( !this.state.visible) {
            return null
        }      
        return (
                <div className="left">                
                    <ul className="list-group">
                        <li className="list-group-item">First item</li>
                        <li className="list-group-item">Second item</li>
                        <li className="list-group-item">Third item</li>
                    </ul>                          
                </div>
                         
        );
      }   
}

