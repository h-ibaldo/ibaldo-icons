"use strict";

const { forwardRef } = require('react');

const ApplicationWindow152 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.00000000018008" y="2.000000000448836" width="20" height="20" rx="1.999999999999432" ry="1.999999999999432" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.00000000036016" y1="8.000000000897671" x2="2.00000000036016" y2="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000763976" x2="8.00000000018008" y2="5.000000000763976" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000627551" x2="5.00000000018008" y2="5.000000000627551" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow152.displayName = 'ApplicationWindow152';

module.exports = ApplicationWindow152;
module.exports.ApplicationWindow152 = ApplicationWindow152;
module.exports.default = ApplicationWindow152;
