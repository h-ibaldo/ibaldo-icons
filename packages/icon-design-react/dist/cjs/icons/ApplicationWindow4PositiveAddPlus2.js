"use strict";

const { forwardRef } = require('react');

const ApplicationWindow4PositiveAddPlus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<g>
    <line x1="11.999999993642632" y1="11.99877929995273" x2="11.999999993642632" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14.999999993642632" y1="14.99877929995273" x2="8.999999993642632" y2="14.99877929995273" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <rect x="1.999999993642632" y="1.998779299956368" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993642632" y1="7.998779299956368" x2="21.999999993642632" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow4PositiveAddPlus2.displayName = 'ApplicationWindow4PositiveAddPlus2';

module.exports = ApplicationWindow4PositiveAddPlus2;
module.exports.ApplicationWindow4PositiveAddPlus2 = ApplicationWindow4PositiveAddPlus2;
module.exports.default = ApplicationWindow4PositiveAddPlus2;
