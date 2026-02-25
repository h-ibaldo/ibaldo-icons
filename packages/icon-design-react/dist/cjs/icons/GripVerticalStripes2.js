"use strict";

const { forwardRef } = require('react');

const GripVerticalStripes2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="17.025268558149946" y1="1.998782736171052" x2="17.025268558149946" y2="21.998782736171052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268558149946" y1="1.998782736171052" x2="12.025268558149946" y2="21.998782736171052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.025268558149946" y1="1.998782736171052" x2="7.025268558149946" y2="21.998782736171052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

GripVerticalStripes2.displayName = 'GripVerticalStripes2';

module.exports = GripVerticalStripes2;
module.exports.GripVerticalStripes2 = GripVerticalStripes2;
module.exports.default = GripVerticalStripes2;
