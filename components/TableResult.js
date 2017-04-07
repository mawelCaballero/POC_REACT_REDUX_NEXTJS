import {connect} from 'react-redux'
import React, {Component} from 'react';

class TableResult extends Component {
  render() {
  var {id, type, label, cols, rows} = this.props;

  var renderCols = cols.map((currentcol) => {
              return <th>{currentcol}</th>;
          });

          var count = 0;

          var renderRows = rows.map((currentRow) => {

              var container = [];
              var row = [];
              for (var currentColumn in cols) {
                  if (currentColumn == '6') {
                      row.push(
                          <td>
                              {count}
                          </td>
                      );
                  } else {
                      row.push(
                          <td>{currentRow[cols[currentColumn]]}</td>
                      );
                  }

              }
              container.push(
                  <tr>{row}</tr>
              );

              count++;

              return container;
          });

          return (
              <table>
                  <thead>
                      <tr>
                          {renderCols}
                      </tr>
                  </thead>
                  <tbody>
                      {renderRows}
                  </tbody>
              </table>
          );
        }
}

export default TableResult;
