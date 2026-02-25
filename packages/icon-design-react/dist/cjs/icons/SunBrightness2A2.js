"use strict";

const { forwardRef } = require('react');

const SunBrightness2A2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12.000000005924448" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="2.000000005924448" x2="12" y2="4.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="20.000000005924448" x2="12" y2="22.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="12.000000005924448" x2="20" y2="12.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4" y1="12.000000005924448" x2="2" y2="12.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067811710236" y1="4.928932193895889" x2="17.656854249360549" y2="6.343145756305603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.343145750630356" y1="17.656854255545113" x2="4.928932188289764" y2="19.071067817945732" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067812019464" y1="19.071067817634685" x2="17.656854249620665" y2="17.656854255284998" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.343145750379335" y1="6.343145756563899" x2="4.928932187980536" y2="4.928932194216031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SunBrightness2A2.displayName = 'SunBrightness2A2';

module.exports = SunBrightness2A2;
module.exports.SunBrightness2A2 = SunBrightness2A2;
module.exports.default = SunBrightness2A2;
