"use strict";

const { forwardRef } = require('react');

const LupeSearch1MoreThreeDots = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="10.999999993273377" cy="10.998779299955459" r="8.999999999998636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.363952629993946" y1="17.362731936675118" x2="21.999999993273377" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999993283382" y1="11.008779299956586" x2="6.999999993283382" y2="10.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.999999993283382" y1="11.008779299956586" x2="10.999999993283382" y2="10.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999993283382" y1="11.008779299956586" x2="14.999999993283382" y2="10.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearch1MoreThreeDots.displayName = 'LupeSearch1MoreThreeDots';

module.exports = LupeSearch1MoreThreeDots;
module.exports.LupeSearch1MoreThreeDots = LupeSearch1MoreThreeDots;
module.exports.default = LupeSearch1MoreThreeDots;
