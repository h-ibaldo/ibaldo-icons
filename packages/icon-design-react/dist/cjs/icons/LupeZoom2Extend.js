"use strict";

const { forwardRef } = require('react');

const LupeZoom2Extend = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="9.97473141752198" cy="9.998779298535737" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.631591769080842" y1="15.655639650098237" x2="21.97473141752198" y2="21.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731417511066 7.998779298535737 6.974731417511066 6.998779298535737 7.974731417511066 6.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.974731417492876 12.998779298513909 12.974731417492876 12.998779298557565 12.974731417532894 11.998779298557565" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.974731417381918 12.998779298470254 6.974731417381918 12.99877929842296 6.974731417421935 11.99877929842296" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.974731417582007 7.998779298713998 12.974731417671137 6.998779298713998 11.974731417671137 6.998779298626687" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731417511066" y1="6.998779298535737" x2="12.974731417511066" y2="12.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731417372823" y1="12.998779298401132" x2="12.974731417642033" y2="6.998779298670343" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeZoom2Extend.displayName = 'LupeZoom2Extend';

module.exports = LupeZoom2Extend;
module.exports.LupeZoom2Extend = LupeZoom2Extend;
module.exports.default = LupeZoom2Extend;
