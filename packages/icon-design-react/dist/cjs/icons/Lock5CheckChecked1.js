"use strict";

const { forwardRef } = require('react');

const Lock5CheckChecked1 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M6.974731450040053,10.000000003885361v-3c0-2.761420987731981,2.238574012269964-5,4.99999500001104-5l.000009999999747.000004999998055c2.761420987719248,0,4.999994999989212,2.238574012269964,4.999994999989212,4.999995000001945v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.974731450040053" cy="15.000000003885361" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731450040053 15.331108254285937 10.974731450040053 17.331108247955854 14.974731450040053 13.331108248137753" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock5CheckChecked1.displayName = 'Lock5CheckChecked1';

module.exports = Lock5CheckChecked1;
module.exports.Lock5CheckChecked1 = Lock5CheckChecked1;
module.exports.default = Lock5CheckChecked1;
