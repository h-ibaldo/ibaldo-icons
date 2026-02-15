"use strict";

const { forwardRef } = require('react');

const ApplicationWindow4XCloseDeleteRemove1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.025268553292335,21.99877930339062h-7c-1.656854249498792,0-3-1.343145750510303-3-3V4.99877930339062c0-1.656854249493335,1.343145750501208-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268553292335" y1="7.99877930339062" x2="22.025268553292335" y2="7.99877930339062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.025268553292335" y1="21.99877930339062" x2="16.025268553292335" y2="15.99877930339062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.025268553292335" y1="15.99877930339062" x2="16.025268553292335" y2="21.99877930339062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow4XCloseDeleteRemove1.displayName = 'ApplicationWindow4XCloseDeleteRemove1';

module.exports = ApplicationWindow4XCloseDeleteRemove1;
module.exports.ApplicationWindow4XCloseDeleteRemove1 = ApplicationWindow4XCloseDeleteRemove1;
module.exports.default = ApplicationWindow4XCloseDeleteRemove1;
