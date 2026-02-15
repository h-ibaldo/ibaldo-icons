"use strict";

const { forwardRef } = require('react');

const LupeSearchZoomIn3PositiveAddPlus = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="8.999999993642632" cy="8.998779299956368" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999993642632" y1="21.998779299956368" x2="13.999999993642632" y2="13.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999993642632" y1="5.998779299956368" x2="8.999999993642632" y2="11.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999993642632" y1="8.998779299956368" x2="5.999999993642632" y2="8.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearchZoomIn3PositiveAddPlus.displayName = 'LupeSearchZoomIn3PositiveAddPlus';

module.exports = LupeSearchZoomIn3PositiveAddPlus;
module.exports.LupeSearchZoomIn3PositiveAddPlus = LupeSearchZoomIn3PositiveAddPlus;
module.exports.default = LupeSearchZoomIn3PositiveAddPlus;
