"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumnsCircleDottedLoggedInProgress = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5,19.071044921871362c1.809631347659888,1.809631347659888,4.309631347659888,2.928955078128638,7.071044921869543,2.928955078128638,5.522827148450233,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851549767-10-10-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.984731440099495" y1="12.000000004336471" x2="1.974731440100186" y2="12.000000004336471" fill="none" stroke="currentColor" stroke-dasharray=".5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.91366362808003" y1="4.928932192626235" x2="4.903663628079812" y2="4.928932192626235" fill="none" stroke="currentColor" stroke-dasharray=".5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.729326399889942" y1="15.78648617775616" x2="2.719326399889724" y2="15.78648617775616" fill="none" stroke="currentColor" stroke-dasharray=".5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.729326399889942" y1="8.213513830905868" x2="2.719326399889724" y2="8.213513830905868" fill="none" stroke="currentColor" stroke-dasharray=".5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.117621823439549" y1="2.777990287755529" x2="8.10762182344024" y2="2.777990287755529" fill="none" stroke="currentColor" stroke-dasharray=".5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.071044921804969" y="9.999999999728971" width="4" height="6" transform="translate(32.14208984303059 26.000000000174147) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.071044921869543" y="6.999999999548891" width="4" height="9" transform="translate(24.142089843216127 22.999999999646707) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.071044921779503" y="10.999999999368811" width="4" height="5" transform="translate(16.142089842957375 26.999999999097309) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumnsCircleDottedLoggedInProgress.displayName = 'ChartVerticalColumnsCircleDottedLoggedInProgress';

module.exports = ChartVerticalColumnsCircleDottedLoggedInProgress;
module.exports.ChartVerticalColumnsCircleDottedLoggedInProgress = ChartVerticalColumnsCircleDottedLoggedInProgress;
module.exports.default = ChartVerticalColumnsCircleDottedLoggedInProgress;
