"use strict";

const { forwardRef } = require('react');

const Lock2UnlockedOpen2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.552612309429605,5.000000003885361c-.772216796889552-1.764404296875-2.528686523450233-3-4.577880859389552-3-2.761474609360448,0-5,2.23858642578125-5,5v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="3.974731450040053" y="10.000000003885361" width="16" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock2UnlockedOpen2.displayName = 'Lock2UnlockedOpen2';

module.exports = Lock2UnlockedOpen2;
module.exports.Lock2UnlockedOpen2 = Lock2UnlockedOpen2;
module.exports.default = Lock2UnlockedOpen2;
