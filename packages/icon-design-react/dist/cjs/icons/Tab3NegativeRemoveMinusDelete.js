"use strict";

const { forwardRef } = require('react');

const Tab3NegativeRemoveMinusDelete = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="15.025268532079281" y1="13.99877930112325" x2="9.025268532079281" y2="13.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 10.025268532079281 1.99877930112325 13.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.025268532079281 1.99877930112325 22.025268532079281 1.99877930112325 22.025268532079281 5.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Tab3NegativeRemoveMinusDelete.displayName = 'Tab3NegativeRemoveMinusDelete';

module.exports = Tab3NegativeRemoveMinusDelete;
module.exports.Tab3NegativeRemoveMinusDelete = Tab3NegativeRemoveMinusDelete;
module.exports.default = Tab3NegativeRemoveMinusDelete;
