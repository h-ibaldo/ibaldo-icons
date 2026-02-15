"use strict";

const { forwardRef } = require('react');

const AtSignEmailContactAddress4DotsSettingsMenu2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="9.97472779569847" y="7.000000000250623" width="5.999999937615598" height="9.999999999999659" rx="2.999996964531985" ry="2.999996964531985" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731450040053" y1="22.000000000478394" x2="12.974731450040053" y2="22.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.974731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000005029506" y1="2.010000000448599" x2="3.000000005029506" y2="2.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450040053" y1="6.010000000468608" x2="2.974731450040053" y2="6.00000000046839" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450040053" y1="10.010000000468608" x2="2.974731450040053" y2="10.00000000046839" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.974731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8-1.897216796880457,0-3.630187988280341.671264648438409-5,1.77618408203125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.043823246909596,15.00000000046839c.493103027350116,3.94525146484375,3.85205078125,7,7.930908203130457,7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSignEmailContactAddress4DotsSettingsMenu2.displayName = 'AtSignEmailContactAddress4DotsSettingsMenu2';

module.exports = AtSignEmailContactAddress4DotsSettingsMenu2;
module.exports.AtSignEmailContactAddress4DotsSettingsMenu2 = AtSignEmailContactAddress4DotsSettingsMenu2;
module.exports.default = AtSignEmailContactAddress4DotsSettingsMenu2;
