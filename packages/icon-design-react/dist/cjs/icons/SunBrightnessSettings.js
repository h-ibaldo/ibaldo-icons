"use strict";

const { forwardRef } = require('react');

const SunBrightnessSettings = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="11.999999990796823" y1="2.000000000448381" x2="11.999999990796823" y2="3.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.999999990796823" y1="12.000000000448381" x2="1.999999990796823" y2="12.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067802503421" y1="4.92893218842255" x2="18.363961021333125" y2="5.636038969624678" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.63603896026143" y1="18.363961031267536" x2="4.928932179090225" y2="19.071067812470574" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.636038959976759" y1="5.636038969912988" x2="4.928932178773721" y2="4.928932188741783" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999990796823" cy="17.000000000456566" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990796823" y1="17.010000000456785" x2="16.999999990796823" y2="17.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990796823" y1="12.000000000456566" x2="16.999999990796823" y2="13.500000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990796823" y1="20.500000000456566" x2="16.999999990796823" y2="22.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999990796823" y1="17.000000000456566" x2="20.499999990796823" y2="17.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.499999990796823" y1="17.000000000456566" x2="11.999999990796823" y2="17.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.535533896808374" y1="20.535533906308956" x2="19.474873725005637" y2="19.474873734554421" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.5251262565871" y1="14.52512626636144" x2="13.464466084785272" y2="13.464466094602358" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.464466084945343" y1="20.535533906469936" x2="14.525126256700787" y2="19.474873734666289" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.474873724894678" y1="14.525126266248662" x2="20.535533896651941" y2="13.464466094445925" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.463195791578983,8.000000000448381c-1.0985107421875-1.224853515625-2.6883544921875-2-4.463195800782159-2-3.313720703125,0-6,2.686279296875-6,6,0,1.774780273436591.775146484375,3.364624023436591,2,4.463134765625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SunBrightnessSettings.displayName = 'SunBrightnessSettings';

module.exports = SunBrightnessSettings;
module.exports.SunBrightnessSettings = SunBrightnessSettings;
module.exports.default = SunBrightnessSettings;
