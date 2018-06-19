import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import GoogleMapReact from 'google-map-react';
import Bubble from './bubble.js';

export class GoogleMaps extends Component {
  static propTypes = {
    maps: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    center: {
      lat: 61.2712,
      lng: 24.0333,
    },
    zoom: 11,
  };
  
  

  render() {
    return (
      <div className="maps-google-maps">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCHJSpL7G2NJ8NuFne5mj_MFfWkOCeAFfI',
            language: 'en',
            region: 'fi',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Bubble lat={61.2712} lng={24.0333} text={'HAMK'} />
        </GoogleMapReact>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    maps: state.maps,
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
)(GoogleMaps);
