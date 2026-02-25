"use strict";

const { forwardRef } = require('react');

const Lock4Locked2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.974731450040053" y="13.000000003885361" width="16" height="9" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.974731450040053,13.000000003885361v-6.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999994999989212-4.999995000001945h-.000009999999747c-2.761420987741076,0-4.99999500001104,2.238574012269964-4.99999500001104,4.999995000001945v6.000004999998055" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock4Locked2.displayName = 'Lock4Locked2';

module.exports = Lock4Locked2;
module.exports.Lock4Locked2 = Lock4Locked2;
module.exports.default = Lock4Locked2;
