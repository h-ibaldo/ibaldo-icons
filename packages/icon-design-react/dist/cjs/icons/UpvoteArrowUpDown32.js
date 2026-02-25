"use strict";

const { forwardRef } = require('react');

const UpvoteArrowUpDown32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="7.016630450972116 9.000000000480213 12.016630450972116 3.000000000480213 17.016630450972116 9.000000000480213 7.016630450972116 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="17.016630450972116 15.000000000480213 12.016630450972116 21.000000000480213 7.016630450972116 15.000000000480213 17.016630450972116 15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UpvoteArrowUpDown32.displayName = 'UpvoteArrowUpDown32';

module.exports = UpvoteArrowUpDown32;
module.exports.UpvoteArrowUpDown32 = UpvoteArrowUpDown32;
module.exports.default = UpvoteArrowUpDown32;
