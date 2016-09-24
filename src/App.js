import React, { PropTypes } from 'react';
import Lun from './Lunbo'

import { Button, ButtonToolbar } from 'react-bootstrap';

const buttonsInstance = (
                    <ButtonToolbar>
   
                            <Button>Default</Button>

                            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                            <Button bsStyle="primary">Primary</Button>

                           
                            <Button bsStyle="success">Success</Button>

                            {/* Contextual button for informational alert messages */}
                            <Button bsStyle="info">Info</Button>

                           
                            <Button bsStyle="warning">Warning</Button>

                            {/* Indicates a dangerous or potentially negative action */}
                            <Button bsStyle="danger">Danger</Button>


                            <Button bsStyle="link">Link</Button>
                  </ButtonToolbar>
)


    

 

class App extends React.Component {
	render () {
        return(
    	   <div>
                {buttonsInstance }
                <Lun/>
    	   </div>
      
        )
    }
}


export default App ;

