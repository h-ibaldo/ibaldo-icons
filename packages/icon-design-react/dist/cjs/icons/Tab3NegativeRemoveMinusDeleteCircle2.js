"use strict";

const { forwardRef } = require('react');

const Tab3NegativeRemoveMinusDeleteCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="10.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 10.0252685320811 1.99877930112325 13.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 9.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.0252685320811 1.99877930112325 22.0252685320811 1.99877930112325 22.0252685320811 5.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <circle cx="17.025268532090195" cy="16.998779306063625" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.0252685320811" y1="16.99877930112325" x2="15.0252685320811" y2="16.998779301301511" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

Tab3NegativeRemoveMinusDeleteCircle2.displayName = 'Tab3NegativeRemoveMinusDeleteCircle2';

module.exports = Tab3NegativeRemoveMinusDeleteCircle2;
module.exports.Tab3NegativeRemoveMinusDeleteCircle2 = Tab3NegativeRemoveMinusDeleteCircle2;
module.exports.default = Tab3NegativeRemoveMinusDeleteCircle2;
