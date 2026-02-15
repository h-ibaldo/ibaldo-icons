"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1Cloud2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M6.000000000184627,22.000000000448381h-2c-1.10456949966192,0-2-.895430500338989-2-2V4.000000000448381c0-1.10456949966192.89543050033808-2,2-2h16c1.10456949966192,0,2,.89543050033808,2,2v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.000000000184627,16.000000000448381h-.050415039060681c-.244506835939319-1.69403076171875-1.687866210939319-3-3.449584960939319-3-1.932983398435681,0-3.5,1.567016601563409-3.5,3.5v.5h-.5c-1.380737304685681,0-2.5,1.119262695313409-2.5,2.5,0,1.380737304688409,1.119262695314319,2.5,2.5,2.5h7.5c1.656860351564319,0,3-1.343139648436591,3-3,0-1.656860351561591-1.343139648435681-3-3-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1Cloud2.displayName = 'ApplicationWindow1Cloud2';

module.exports = ApplicationWindow1Cloud2;
module.exports.ApplicationWindow1Cloud2 = ApplicationWindow1Cloud2;
module.exports.default = ApplicationWindow1Cloud2;
