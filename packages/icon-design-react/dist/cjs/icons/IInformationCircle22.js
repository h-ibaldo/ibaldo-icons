"use strict";

const { forwardRef } = require('react');

const IInformationCircle22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.949462874325036" cy="11.997562036765885" r="8.000000000000455" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462874325036" y1="8.987562036764757" x2="11.949462874325036" y2="8.997562036764975" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462874325036" y1="14.997562036764975" x2="11.949462874325036" y2="11.997562036764975" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

IInformationCircle22.displayName = 'IInformationCircle22';

module.exports = IInformationCircle22;
module.exports.IInformationCircle22 = IInformationCircle22;
module.exports.default = IInformationCircle22;
