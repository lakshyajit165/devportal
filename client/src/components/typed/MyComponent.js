import React,{ Component } from 'react';

import Typed from 'react-typed';
 
class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed 
                    strings={['Let\'s Connect','Let\'s Create','Let\'s Develop','Let\'s Grow...']} 
                    typeSpeed={60} 
                    backSpeed={80}
                    loop
                    smartBackspace={true}
                    stringsElement={'typing'}
                />
                <br/>
 
               
            </div>
        );
    }
}

export default MyComponent;