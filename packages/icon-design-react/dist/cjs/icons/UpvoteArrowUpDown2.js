"use strict";

const { forwardRef } = require('react');

const UpvoteArrowUpDown2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="17.016630450972116 7.000000000480213 12.016630450972116 2.000000000480213 7.016630450972116 7.000000000480213 10.016630450972116 7.000000000480213 10.016630450972116 10.000000000480213 14.016630450972116 10.000000000480213 14.016630450972116 7.000000000480213 17.016630450972116 7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="7.016630450972116 17.000000000480213 12.016630450972116 22.000000000480213 17.016630450972116 17.000000000480213 14.016630450972116 17.000000000480213 14.016630450972116 14.000000000480213 10.016630450972116 14.000000000480213 10.016630450972116 17.000000000480213 7.016630450972116 17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UpvoteArrowUpDown2.displayName = 'UpvoteArrowUpDown2';

module.exports = UpvoteArrowUpDown2;
module.exports.UpvoteArrowUpDown2 = UpvoteArrowUpDown2;
module.exports.default = UpvoteArrowUpDown2;
