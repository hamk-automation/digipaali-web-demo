import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

const TableRow = function({ data }) {
  return (
    <tr>
      <td>{data.Object.keys(data)}</td>
    </tr>
  );
};

export class Table extends Component {
  static propTypes = {
    googleMap: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="google-map-table">
        <table>
          {this.props.googleMap.markers.map(item => <th>{Object.keys(item)}</th>)}

          {this.props.googleMap.markers.map(item => <TableRow key={item.baleId} data={item} />)}
        </table>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    googleMap: state.googleMap,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
