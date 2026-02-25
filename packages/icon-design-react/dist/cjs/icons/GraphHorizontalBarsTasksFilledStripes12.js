"use strict";

const { forwardRef } = require('react');

const GraphHorizontalBarsTasksFilledStripes12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.949462885140747" y="2.000000000480213" width="20" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885140747" y="10.000000000480213" width="20" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885140747" y="18.000000000480213" width="20" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.949462885142566" y1="2.000000000480213" x2="4.949462885142566" y2="6.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.949462885142566" y1="2.000000000480213" x2="7.949462885142566" y2="6.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.949462885142566" y1="18.000000000480213" x2="4.949462885142566" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.949462885142566" y1="18.000000000480213" x2="7.949462885142566" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885142566" y1="18.000000000480213" x2="10.949462885142566" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.949462885142566" y1="10.000000000480213" x2="4.949462885142566" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.949462885142566" y1="10.000000000480213" x2="7.949462885142566" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.949462885142566" y1="10.000000000480213" x2="10.949462885142566" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.949462885142566" y1="10.000000000480213" x2="13.949462885142566" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

GraphHorizontalBarsTasksFilledStripes12.displayName = 'GraphHorizontalBarsTasksFilledStripes12';

module.exports = GraphHorizontalBarsTasksFilledStripes12;
module.exports.GraphHorizontalBarsTasksFilledStripes12 = GraphHorizontalBarsTasksFilledStripes12;
module.exports.default = GraphHorizontalBarsTasksFilledStripes12;
