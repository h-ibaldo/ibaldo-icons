"use strict";

const { forwardRef } = require('react');

const LupeSearch1CheckCheckedVerified2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="10.999999993264282" cy="10.998779299955459" r="8.999999999998636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.363952629983032" y1="17.362731936675118" x2="21.999999993264282" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.999999993283382 10.998779299956368 9.999999993283382 12.998779299956368 13.999999993283382 8.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearch1CheckCheckedVerified2.displayName = 'LupeSearch1CheckCheckedVerified2';

module.exports = LupeSearch1CheckCheckedVerified2;
module.exports.LupeSearch1CheckCheckedVerified2 = LupeSearch1CheckCheckedVerified2;
module.exports.default = LupeSearch1CheckCheckedVerified2;
