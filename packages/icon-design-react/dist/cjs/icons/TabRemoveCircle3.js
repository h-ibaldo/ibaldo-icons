"use strict";

const { forwardRef } = require('react');

const TabRemoveCircle3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="12.149805223280055 21.998782740736715 2.050537109160359 21.998782740736715 2.050537109160359 1.998782740736715 11.050537109160359 1.998782740736715 11.050537109160359 5.998782740736715 22.050537109160359 5.998782740736715 22.050537109160359 13.998782740736715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.050537109160359" y1="1.998782740736715" x2="15.050537109160359" y2="1.998782740736715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.050537109160359" y1="18.998782740733986" x2="22.050537109160359" y2="18.998782740733986" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TabRemoveCircle3.displayName = 'TabRemoveCircle3';

module.exports = TabRemoveCircle3;
module.exports.TabRemoveCircle3 = TabRemoveCircle3;
module.exports.default = TabRemoveCircle3;
