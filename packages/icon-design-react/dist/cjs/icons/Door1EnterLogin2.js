"use strict";

const { forwardRef } = require('react');

const Door1EnterLogin2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="19.974731450043691 19.000000000481123 9.974731450043691 22.000000000481123 9.974731450043691 2.000000000481123 19.974731450043691 5.000000000481123 19.974731450043691 19.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731450043691 20.000000000481123 3.974731450043691 20.000000000481123 3.974731450043691 4.000000000481123 6.974731450043691 4.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Door1EnterLogin2.displayName = 'Door1EnterLogin2';

module.exports = Door1EnterLogin2;
module.exports.Door1EnterLogin2 = Door1EnterLogin2;
module.exports.default = Door1EnterLogin2;
