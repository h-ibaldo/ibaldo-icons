"use strict";

const { forwardRef } = require('react');

const SunBrightnessB2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12.000000005924448" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="20.000000005924448" x2="12" y2="22.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="2.000000005924448" x2="12" y2="4.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20" y1="12.000000006284608" x2="22" y2="12.000000006375558" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="12.000000005475158" x2="4" y2="12.000000005564289" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.656854249369644" y1="17.656854255545113" x2="19.071067811710236" y2="19.071067817945732" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932188289764" y1="4.928932193904984" x2="6.343145750639451" y2="6.343145756305603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.65685424988078" y1="6.34314575681492" x2="19.071067812339606" y2="4.928932194534354" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932187660394" y1="19.071067817314542" x2="6.343145750130134" y2="17.656854255033977" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SunBrightnessB2.displayName = 'SunBrightnessB2';

module.exports = SunBrightnessB2;
module.exports.SunBrightnessB2 = SunBrightnessB2;
module.exports.default = SunBrightnessB2;
