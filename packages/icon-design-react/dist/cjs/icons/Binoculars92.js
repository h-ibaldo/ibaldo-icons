"use strict";

const { forwardRef } = require('react');

const Binoculars92 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="5.999988017749274" cy="14.936828613188482" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.999988017749274" cy="14.936828613188482" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.999988017749274,14.936828613188482v-1c0-1.104553222659888.895446777340112-2,2-2,1.104614257801586,0,2,.895446777340112,2,2v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.999988017749274,6.936828613188482c-1.656854249489697,0-3,1.343145750508484-3,3v1.141418457029431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.999988017749274,11.078247070217913v-1.141418457029431c0-1.656854249491516-1.343145750508484-3-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.999988047539716" y="4.936828613168458" width="1.999999940390921" height="2.000000000000029" rx=".816495731980482" ry=".816495731980482" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Binoculars92.displayName = 'Binoculars92';

module.exports = Binoculars92;
module.exports.Binoculars92 = Binoculars92;
module.exports.default = Binoculars92;
