"use strict";

const { forwardRef } = require('react');

const OverscanSettings3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731449510728" y="4.056394887018541" width="20" height="15.887210226921525" rx="2.673807136297" ry="2.673807136297" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.067167566010539 10.000000000211003 6.06716756573951 11.999999999941792 8.067167565470299 14.000000000211003" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.067167566010539 10.000000000571163 18.06716756609967 12.000000000480213 16.067167566190619 14.000000000571163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

OverscanSettings3.displayName = 'OverscanSettings3';

module.exports = OverscanSettings3;
module.exports.OverscanSettings3 = OverscanSettings3;
module.exports.default = OverscanSettings3;
