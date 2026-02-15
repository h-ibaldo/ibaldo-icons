"use strict";

const { forwardRef } = require('react');

const GraphHorizontalBarsTasksLines = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.949462885142566" y="2.000000000480213" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885144385" y1="7.000000000480213" x2="6.949462885142566" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885144385" y1="12.000000000480213" x2="15.949462885142566" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885144385" y1="17.000000000480213" x2="12.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

GraphHorizontalBarsTasksLines.displayName = 'GraphHorizontalBarsTasksLines';

module.exports = GraphHorizontalBarsTasksLines;
module.exports.GraphHorizontalBarsTasksLines = GraphHorizontalBarsTasksLines;
module.exports.default = GraphHorizontalBarsTasksLines;
