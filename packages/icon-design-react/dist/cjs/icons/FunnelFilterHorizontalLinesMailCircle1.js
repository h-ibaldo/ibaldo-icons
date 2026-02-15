"use strict";

const { forwardRef } = require('react');

const FunnelFilterHorizontalLinesMailCircle1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.974731449501633" cy="12.000000000479986" r="10.000000000000341" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731449501633" y1="9.000000000480213" x2="16.974731449501633" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731449501633" y1="13.000000000480213" x2="14.974731449501633" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731449501633" y1="17.000000000480213" x2="12.974731449501633" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FunnelFilterHorizontalLinesMailCircle1.displayName = 'FunnelFilterHorizontalLinesMailCircle1';

module.exports = FunnelFilterHorizontalLinesMailCircle1;
module.exports.FunnelFilterHorizontalLinesMailCircle1 = FunnelFilterHorizontalLinesMailCircle1;
module.exports.default = FunnelFilterHorizontalLinesMailCircle1;
