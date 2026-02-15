"use strict";

const { forwardRef } = require('react');

const SunBrightness6B = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12.000000001974058" r="5.999999999999773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="12.000000001526132" x2="3" y2="12.000000001569788" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21" y1="12.000000002379238" x2="22" y2="12.000000002422894" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999999350621" y1="20.660254039450592" x2="7.499999999419742" y2="19.794228635701074" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.500000000580258" y1="4.205771368257047" x2="17.000000000649379" y2="3.339745964509348" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999999092324" y1="20.660254040349173" x2="16.499999999179636" y2="19.794228636506887" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.500000000820364" y1="4.205771367442139" x2="7.000000000907676" y2="3.339745963608948" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.339745961855442" y1="17.000000001457011" x2="4.205771365668625" y2="16.500000001504304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.794228634331375" y1="7.500000002444722" x2="20.660254038144558" y2="7.000000002492015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999999101419" y1="22.000000001973604" x2="11.999999999196007" y2="21.000000001973604" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000000803993" y1="3.000000001973604" x2="12.000000000898581" y2="2.000000001973604" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.660254037245977" y1="17.000000003012246" x2="19.794228633518287" y2="16.500000002904926" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.205771366481713" y1="7.5000000010441" x2="3.339745962754023" y2="7.00000000093678" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SunBrightness6B.displayName = 'SunBrightness6B';

module.exports = SunBrightness6B;
module.exports.SunBrightness6B = SunBrightness6B;
module.exports.default = SunBrightness6B;
