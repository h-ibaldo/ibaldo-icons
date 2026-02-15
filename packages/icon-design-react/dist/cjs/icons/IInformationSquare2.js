"use strict";

const { forwardRef } = require('react');

const IInformationSquare2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.949462878465056" y="3.997562035597184" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462878465056" y1="8.987562035596966" x2="11.949462878465056" y2="8.997562035597184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462878465056" y1="14.997562035597184" x2="11.949462878465056" y2="11.997562035597184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

IInformationSquare2.displayName = 'IInformationSquare2';

module.exports = IInformationSquare2;
module.exports.IInformationSquare2 = IInformationSquare2;
module.exports.default = IInformationSquare2;
