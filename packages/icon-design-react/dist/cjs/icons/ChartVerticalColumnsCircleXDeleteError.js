"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumnsCircleXDeleteError = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="5.974731440099276" y="11.000000003885361" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.974731440099276" y="7.000000003885361" width="4" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.974731440099276" y="9.000000003885361" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.773864740889621,10.000000003885361c.131225585930224.646240234371362.200866699209655,1.31494140625.200866699209655,2,0,5.52294921875-4.477172851549767,10-10,10-5.522827148439319,0-10-4.47705078125-10-10C1.974731440099276,6.477172855447861,6.451904291659957,2.000000003885361,11.974731440099276,2.000000003885361c.684997558590112,0,1.353698730470569.069580078121362,2,.200927734371362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731440099276" y1="6.000000003885361" x2="21.974731440099276" y2="2.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731440199321" y1="6.000000003794412" x2="17.974731440010146" y2="2.000000003976311" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumnsCircleXDeleteError.displayName = 'ChartVerticalColumnsCircleXDeleteError';

module.exports = ChartVerticalColumnsCircleXDeleteError;
module.exports.ChartVerticalColumnsCircleXDeleteError = ChartVerticalColumnsCircleXDeleteError;
module.exports.default = ChartVerticalColumnsCircleXDeleteError;
