"use strict";

const { forwardRef } = require('react');

const Cloud1Box2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999999996362" y="1.999999999998181" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999999996362,12.050415038787833v-1.550415039069776c0-1.932983398430224-1.5670166015625-3.5-3.5-3.5-1.77740478515625,0-3.2293701171875,1.329650878909888-3.4542236328125,3.045776367189319-1.71612548828125.224853515630457-3.0457763671875,1.676818847659888-3.0457763671875,3.454223632810681,0,1.932983398439319,1.5670166015625,3.5,3.5,3.5h6c1.3807373046875,0,2.5-1.119262695310681,2.5-2.5,0-1.20947265625-.85888671875-2.217895507810681-2-2.449584960930224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud1Box2.displayName = 'Cloud1Box2';

module.exports = Cloud1Box2;
module.exports.Cloud1Box2 = Cloud1Box2;
module.exports.default = Cloud1Box2;
