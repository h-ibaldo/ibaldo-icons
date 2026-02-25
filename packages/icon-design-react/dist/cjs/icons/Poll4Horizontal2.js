"use strict";

const { forwardRef } = require('react');

const Poll4Horizontal2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="2.025268534409406 1.99999999883039 14.025268534409406 1.99999999883039 14.025268534409406 5.99999999883039 2.025268534409406 5.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.025268534409406 9.99999999883039 6.025268534409406 9.99999999883039 6.025268534409406 13.99999999883039 2.025268534409406 13.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.025268534409406 17.99999999883039 10.025268534409406 17.99999999883039 10.025268534409406 21.99999999883039 2.025268534409406 21.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.025268534409406" y1="3.99999999883039" x2="22.025268534409406" y2="3.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.025268534409406" y1="1.99999999883039" x2="20.025268534409406" y2="5.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.025268534409406" y1="19.99999999883039" x2="18.025268534409406" y2="19.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.025268534409406" y1="11.99999999883039" x2="14.025268534409406" y2="11.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.025268534409406" y1="17.99999999883039" x2="16.025268534409406" y2="21.99999999883039" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Poll4Horizontal2.displayName = 'Poll4Horizontal2';

module.exports = Poll4Horizontal2;
module.exports.Poll4Horizontal2 = Poll4Horizontal2;
module.exports.default = Poll4Horizontal2;
