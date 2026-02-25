"use strict";

const { forwardRef } = require('react');

const LupeZoom3ActualSizeOneToOne2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="8.999999981002475" cy="8.997562035418014" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999981002475" y1="21.997562035418014" x2="13.999999981002475" y2="13.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999980991561" y1="6.997562035418014" x2="5.999999980991561" y2="10.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999980991561" y1="6.997562035418014" x2="11.999999980991561" y2="10.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999980991561" y1="7.007562035418232" x2="8.999999980991561" y2="6.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999980991561" y1="11.007562035418232" x2="8.999999980991561" y2="10.997562035418014" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeZoom3ActualSizeOneToOne2.displayName = 'LupeZoom3ActualSizeOneToOne2';

module.exports = LupeZoom3ActualSizeOneToOne2;
module.exports.LupeZoom3ActualSizeOneToOne2 = LupeZoom3ActualSizeOneToOne2;
module.exports.default = LupeZoom3ActualSizeOneToOne2;
