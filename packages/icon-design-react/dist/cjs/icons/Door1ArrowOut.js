"use strict";

const { forwardRef } = require('react');

const Door1ArrowOut = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731450043691 7.000000000479304 5.974731450041872 4.000000000481123 8.974731450043691 4.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731450043691 20.000000000481123 5.974731450041872 20.000000000481123 5.974731450041872 17.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="3.974731450043691 14.000000000481123 1.974731450043691 12.000000000481123 3.974731450043691 10.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731450043691" y1="12.000000000481123" x2="1.974731450043691" y2="12.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Door1ArrowOut.displayName = 'Door1ArrowOut';

module.exports = Door1ArrowOut;
module.exports.Door1ArrowOut = Door1ArrowOut;
module.exports.default = Door1ArrowOut;
