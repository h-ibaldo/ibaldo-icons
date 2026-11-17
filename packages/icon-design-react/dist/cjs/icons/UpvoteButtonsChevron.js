"use strict";

const { forwardRef } = require('react');

const UpvoteButtonsChevron = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="5.016630450972116" y="2.000000000480213" width="14" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.016630450974844 8.000000000480213 12.016630450974844 6.000000000480213 14.016630450974844 8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.016630451063975 16.000000000658474 12.016630450883895 18.000000000476575 10.016630451063975 16.000000000298314" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.016630450972116" y1="12.000000000480213" x2="19.016630450972116" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UpvoteButtonsChevron.displayName = 'UpvoteButtonsChevron';

module.exports = UpvoteButtonsChevron;
module.exports.UpvoteButtonsChevron = UpvoteButtonsChevron;
module.exports.default = UpvoteButtonsChevron;
