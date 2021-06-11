// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    handleKeypress = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    onKeyUp={this.handleKeypress}
                />
            </div>
        )
    }

}

export default Keypad