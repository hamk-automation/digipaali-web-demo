// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  DefaultPage,
  Table,
  Maps,
} from './';

export default {
  path: 'google-map',
  name: 'Google map',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/table', name: 'Table', component: Table },
    { path: '/google-maps/maps', name: 'Maps', component: Maps },
  ],
};
