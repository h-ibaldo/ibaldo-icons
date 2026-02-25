"use strict";

const { forwardRef } = require('react');

const LupeSearchZoom32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="9.000000014042598" cy="8.998779305395146" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000014042598" y1="21.998779305395146" x2="14.000000014042598" y2="13.998779305395146" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearchZoom32.displayName = 'LupeSearchZoom32';

module.exports = LupeSearchZoom32;
module.exports.LupeSearchZoom32 = LupeSearchZoom32;
module.exports.default = LupeSearchZoom32;
