"use strict";

const { forwardRef } = require('react');

const LupeZoom3ToExtend2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="8.97473141752198" cy="8.998779298535737" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.97473141752198" y1="21.998779298535737" x2="13.97473141752198" y2="13.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731417511066 6.998779298539375 5.974731417511066 5.998779298535737 6.974731417511066 5.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.974731417532894 6.998779298517547 11.974731417492876 5.998779298513909 10.974731417492876 5.998779298557565" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.974731417532894 10.998779298513909 11.974731417532894 11.998779298513909 10.974731417532894 11.998779298513909" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731417511066 10.998779298535737 5.974731417551084 11.998779298535737 6.974731417561998 11.998779298492082" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.974731417511066" y1="11.998779298535737" x2="11.974731417511066" y2="5.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.974731417511066" y1="5.998779298535737" x2="11.974731417511066" y2="11.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeZoom3ToExtend2.displayName = 'LupeZoom3ToExtend2';

module.exports = LupeZoom3ToExtend2;
module.exports.LupeZoom3ToExtend2 = LupeZoom3ToExtend2;
module.exports.default = LupeZoom3ToExtend2;
