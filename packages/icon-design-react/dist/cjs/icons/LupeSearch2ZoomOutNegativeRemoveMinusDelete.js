"use strict";

const { forwardRef } = require('react');

const LupeSearch2ZoomOutNegativeRemoveMinusDelete = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="9.999999993642632" cy="9.998779299956368" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.656860345202404" y1="15.655639651518868" x2="21.999999993642632" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.999999993642632" y1="9.998779299956368" x2="6.999999993642632" y2="9.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearch2ZoomOutNegativeRemoveMinusDelete.displayName = 'LupeSearch2ZoomOutNegativeRemoveMinusDelete';

module.exports = LupeSearch2ZoomOutNegativeRemoveMinusDelete;
module.exports.LupeSearch2ZoomOutNegativeRemoveMinusDelete = LupeSearch2ZoomOutNegativeRemoveMinusDelete;
module.exports.default = LupeSearch2ZoomOutNegativeRemoveMinusDelete;
