import React, { Component } from 'react';
import Scrollbar from 'react-scrollbars-custom'; //Scrollbar fra https://www.npmjs.com/package/react-scrollbars-custom & https://xobotyi.github.io/react-scrollbars-custom/


export default class Accept extends Component {
    render() {
        return (
            <div>
                <h1 style={{position: 'static',  left: '50%'}}>The light has been </h1>
                <Scrollbar style={{ width: 200, height: 40, alignContent:'center', position: 'absolute', left: '45%'}}>
                    <div style={{ marginLeft: '0px', marginRight: '0px' }}>
                        <div>
                            {this.props.states.greenText}
                        </div>
                        <div>
                            {this.props.states.yellowText}
                        </div>
                        <div>
                            {this.props.states.redText}
                        </div>
                    </div>
                    </Scrollbar>
                <div></div>
            </div>
        )
    }
}