"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumnsRectangle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731440099276" y="2.000000004336471" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="5.974731440099276" y="11.000000003885361" width="4" height="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.974731440099276" y="7.000000003885361" width="4" height="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.974731440099276" y="9.000000003885361" width="4" height="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumnsRectangle2.displayName = 'ChartVerticalColumnsRectangle2';

module.exports = ChartVerticalColumnsRectangle2;
module.exports.ChartVerticalColumnsRectangle2 = ChartVerticalColumnsRectangle2;
module.exports.default = ChartVerticalColumnsRectangle2;
