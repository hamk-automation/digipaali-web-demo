// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  GoogleMaps,
} from './';

export default {
  path: 'maps',
  name: 'Maps',
  childRoutes: [
    { path: 'google-maps', name: 'Google maps', component: GoogleMaps, isIndex: true },
  ],
};
