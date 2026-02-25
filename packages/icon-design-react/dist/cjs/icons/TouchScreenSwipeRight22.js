"use strict";

const { forwardRef } = require('react');

const TouchScreenSwipeRight22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="19.025268535095165 8.998779304496566 22.025268534956922 11.998779304631171 19.025268534836869 14.998779304496566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.025268534956922" y1="11.998779304274649" x2="22.025268534956922" y2="11.998779304631171" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="6.025268534961469" cy="11.998779303913579" r="3.999999999997272" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenSwipeRight22.displayName = 'TouchScreenSwipeRight22';

module.exports = TouchScreenSwipeRight22;
module.exports.TouchScreenSwipeRight22 = TouchScreenSwipeRight22;
module.exports.default = TouchScreenSwipeRight22;
