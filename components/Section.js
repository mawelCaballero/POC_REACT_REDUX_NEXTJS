import {connect} from 'react-redux'
import React, {Component} from 'react';
import Property from './Property';
import TableResult from './TableResult';

class Section extends Component {
  render(){

    var {title, properties } = this.props;

    var renderProperties = () => {

        if (properties) {
            return properties.map((property) => {
              debugger;
                switch (property.type) {
                    case 'text':
                        return <Property key = {
                            property.id
                        }
                        id = {
                            property.id
                        }
                        type = {
                            property.type
                        }
                        label = {
                            property.label
                        }
                        action = {
                            property.action
                        }
                        value = {
                            property.value
                        }
                        href = {
                            property.href
                        }
                        />
                    case 'table':
                        return <TableResult key = {
                            property.id
                        }
                        id = {
                            property.id
                        }
                        type = {
                            property.type
                        }
                        label = {
                            property.label
                        }
                        cols = {
                            property.cols
                        }
                        rows = {
                            property.rows
                        }
                        />
                    default:
                        return <div > Print a
                        default property < /div>
                        break;
                };
            });
        } else {
            return <div > < /div>
        }
    }


    var _title = '';
    if (title) {
        _title = title;
    } else {
        _title = 'Default title';
    }


    return (
       <div>
          <h2>{_title}</h2>
         {renderProperties()}
      </div>
    )
  }
}

export default Section;
