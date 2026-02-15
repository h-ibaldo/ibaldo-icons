"use strict";

const { forwardRef } = require('react');

const SquareArrowDownLeft = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.025268567788771" y="1.998782735923669" width="20" height="20" rx="1.999999999990905" ry="1.999999999990905" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.025268566489103 14.998782735836357 9.025268566489103 14.998782736058274 9.025268566269006 9.998782736058274" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.025268566218074" y1="8.998782735789064" x2="9.025268566489103" y2="14.998782736058274" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SquareArrowDownLeft.displayName = 'SquareArrowDownLeft';

module.exports = SquareArrowDownLeft;
module.exports.SquareArrowDownLeft = SquareArrowDownLeft;
module.exports.default = SquareArrowDownLeft;
