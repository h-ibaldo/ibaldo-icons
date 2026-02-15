"use strict";

const { forwardRef } = require('react');

const ChartArrowUpCircleArrowIn = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="5.949462885139837 18.000000000298314 7.949462885139837 20.000000000298314 5.949462885139837 22.000000000298314" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885139837" y1="20.000000000298314" x2="7.949462885139837" y2="20.000000000298314" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.949462885139837,22.000000000298314c5.522827148440228,0,10-4.477172851558862,10-10,0-5.52294921875-4.477172851559772-10-10-10S1.949462885139837,6.477050781548314,1.949462885139837,12.000000000298314c0,1.04541015625.161682128909888,2.052734375.459228515620453,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.949462885139837 14.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 16.949462885139837 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.949462885139837 12.000000000480213 16.949462885139837 9.000000000480213 13.949462885139837 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartArrowUpCircleArrowIn.displayName = 'ChartArrowUpCircleArrowIn';

module.exports = ChartArrowUpCircleArrowIn;
module.exports.ChartArrowUpCircleArrowIn = ChartArrowUpCircleArrowIn;
module.exports.default = ChartArrowUpCircleArrowIn;
