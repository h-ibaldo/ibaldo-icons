"use strict";

const { forwardRef } = require('react');

const IInformationCircle12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.94946287847597" cy="11.997562036048294" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462878465056" y1="7.987562035596966" x2="11.949462878465056" y2="7.997562035597184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462878465056" y1="15.997562035597184" x2="11.949462878465056" y2="11.997562035597184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

IInformationCircle12.displayName = 'IInformationCircle12';

module.exports = IInformationCircle12;
module.exports.IInformationCircle12 = IInformationCircle12;
module.exports.default = IInformationCircle12;
