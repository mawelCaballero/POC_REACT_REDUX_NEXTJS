import {connect} from 'react-redux'
import React, {Component} from 'react';
import Section from './Section';


class Page extends Component {

  render(){
    var {title, viewdata } = this.props;

     var renderTitle = () => {
      debugger;
        if (viewdata !== null && viewdata.title !== null && typeof viewdata.title !== 'undefined') {
            return <div > {
                viewdata.title
            } < /div>;
        } else {
            return <div> Loading </div>;
        }
    }

    var renderSections = () => {
        if (viewdata && viewdata.sections) {
          debugger;
            return viewdata.sections.map((section) => {
                return <Section key = {section.title} title = {section.title} properties = {section.properties}/>;
            });
        } else {
            return <div > ...be pacience < /div>
        }
    };

    return (
      <div className="page-title">
        <h1> {renderTitle()} </h1>
          {renderSections()}
      </div>
    )
  }
}


export default connect(state => state)(Page);
