"use strict";

const { forwardRef } = require('react');

const Door2EnterLogin2 = forwardRef(({
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
  <polyline points="6.974731450043691 20.000000000481123 3.974731450043691 20.000000000481123 3.974731450043691 4.000000000481123 6.974731450043691 4.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.974731450043691" y1="10.000000000481123" x2="13.974731450043691" y2="14.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Door2EnterLogin2.displayName = 'Door2EnterLogin2';

module.exports = Door2EnterLogin2;
module.exports.Door2EnterLogin2 = Door2EnterLogin2;
module.exports.default = Door2EnterLogin2;
