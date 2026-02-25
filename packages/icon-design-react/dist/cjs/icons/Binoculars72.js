"use strict";

const { forwardRef } = require('react');

const Binoculars72 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="6.999988017279975" cy="16.936828613188482" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999988017279975" cy="16.936828613188482" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999988017279975,16.936828613188482V6.936828613188482c0-1.656860351560681-1.343139648439319-3-3-3,0-1.104553222650793-.895385742189319-2-2-2h-1c-1.104553222659888,0-2,.895446777349207-2,2h-4c0-1.104553222650793-.895385742189319-2-2-2h-1c-1.104553222659888,0-2,.895446777349207-2,2-1.656860351560681,0-3,1.343139648439319-3,3v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Binoculars72.displayName = 'Binoculars72';

module.exports = Binoculars72;
module.exports.Binoculars72 = Binoculars72;
module.exports.default = Binoculars72;
