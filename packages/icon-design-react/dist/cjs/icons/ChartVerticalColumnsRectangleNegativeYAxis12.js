"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumnsRectangleNegativeYAxis12 = forwardRef(({
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
  <rect x="5.974731440099276" y="6.000000003885361" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.974731440099276" y="6.000000003885361" width="4" height="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.974731440099276" y="6.000000003885361" width="4" height="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumnsRectangleNegativeYAxis12.displayName = 'ChartVerticalColumnsRectangleNegativeYAxis12';

module.exports = ChartVerticalColumnsRectangleNegativeYAxis12;
module.exports.ChartVerticalColumnsRectangleNegativeYAxis12 = ChartVerticalColumnsRectangleNegativeYAxis12;
module.exports.default = ChartVerticalColumnsRectangleNegativeYAxis12;
