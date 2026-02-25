"use strict";

const { forwardRef } = require('react');

const GraphHorizontalBarsTasksFilledDots32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.949462885142566" y="3.000000000480213" width="20" height="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.949462885142566" y1="15.000000000480213" x2="1.949462885142566" y2="15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885142566" y1="9.000000000480213" x2="21.949462885142566" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.959462885140965" y1="11.000000000480213" x2="3.949462885142566" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.959462885140965" y1="11.000000000480213" x2="5.949462885142566" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.959462885142784" y1="11.000000000480213" x2="7.949462885142566" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.959462885142784" y1="11.000000000480213" x2="9.949462885142566" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.959462885140965" y1="11.000000000480213" x2="11.949462885142566" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.959462885140965" y1="11.000000000480213" x2="13.949462885142566" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.959462885142784" y1="13.000000000480213" x2="2.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.959462885142784" y1="13.000000000480213" x2="4.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.959462885142784" y1="13.000000000480213" x2="6.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.949462885140747" y1="5.000000000480213" x2="3.959462885142784" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.949462885140747" y1="5.000000000480213" x2="5.959462885142784" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.959462885142784" y1="7.000000000480213" x2="2.949462885142566" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.959462885142784" y1="7.000000000480213" x2="4.949462885142566" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.959462885142784" y1="7.000000000480213" x2="6.949462885142566" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.959462885142784" y1="13.000000000480213" x2="8.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.959462885142784" y1="13.000000000480213" x2="10.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.959462885142784" y1="13.000000000480213" x2="12.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.959462885142784" y1="13.000000000480213" x2="14.949462885142566" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.949462885142566" y1="9.000000000480213" x2="15.949462885142566" y2="15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.949462885142566" y1="3.000000000480213" x2="7.949462885142566" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.959462885140965" y1="17.000000000480213" x2="3.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.959462885140965" y1="17.000000000480213" x2="5.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.959462885142784" y1="17.000000000480213" x2="7.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.959462885142784" y1="19.000000000480213" x2="2.949462885142566" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.959462885142784" y1="19.000000000480213" x2="4.949462885142566" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.959462885142784" y1="19.000000000480213" x2="6.949462885142566" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.959462885139146" y1="17.000000000480213" x2="9.949462885140747" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.959462885140965" y1="17.000000000480213" x2="11.949462885142566" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.949462885140747" y1="19.000000000480213" x2="8.959462885142784" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.959462885142784" y1="19.000000000480213" x2="10.949462885142566" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.949462885142566" y1="15.000000000480213" x2="12.949462885142566" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

GraphHorizontalBarsTasksFilledDots32.displayName = 'GraphHorizontalBarsTasksFilledDots32';

module.exports = GraphHorizontalBarsTasksFilledDots32;
module.exports.GraphHorizontalBarsTasksFilledDots32 = GraphHorizontalBarsTasksFilledDots32;
module.exports.default = GraphHorizontalBarsTasksFilledDots32;
