"use strict";

const { forwardRef } = require('react');

const UpvotePlusMinus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="11.516630450973935" y1="4.000000000480213" x2="11.516630450973935" y2="13.000000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.016630450973935" y1="8.500000000476575" x2="7.016630450973935" y2="8.500000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.016630450973935" y1="19.500000000476575" x2="7.016630450973935" y2="19.500000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UpvotePlusMinus2.displayName = 'UpvotePlusMinus2';

module.exports = UpvotePlusMinus2;
module.exports.UpvotePlusMinus2 = UpvotePlusMinus2;
module.exports.default = UpvotePlusMinus2;
