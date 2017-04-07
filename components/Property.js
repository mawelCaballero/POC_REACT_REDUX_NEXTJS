import {connect} from 'react-redux'
import React, {Component} from 'react';

 class Property extends Component {
  render(){
    var {id, type, label, action, value, href} = this.props;

  var renderInputActionSearch = () => {
      if (action && action.actionType === 'search') {
          return <input type="button" className="button" value="Search"></input>
      }
      return null;
  }

    return (
        <div className="row">
            <div className="small-2 large-4 columns">
                <label className="label" htmlFor={id}>{label}</label>
            </div>
            <div className="small-6 large-6 columns">
                <input  type={type} id={id} name={id} ref={(input) => {
                    this.textInput = input;
                }} value={value} />
            </div>

            <div className="small-2 large-2 columns">
                {renderInputActionSearch()}
            </div>

        </div>
    );


  }
}

export default connect(state => state)(Property);
