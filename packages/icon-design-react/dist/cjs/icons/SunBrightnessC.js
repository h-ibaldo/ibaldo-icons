"use strict";

const { forwardRef } = require('react');

const SunBrightnessC = forwardRef(({
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
  <line x1="12" y1="21" x2="12" y2="22.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="3" x2="12" y2="2.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000005924448" y1="12.000000005924448" x2="2" y2="12.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.000000005924448" y1="12.000000005924448" x2="22" y2="12.000000005924448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.63603897365374" y1="18.363961032557199" x2="4.928932188293402" y2="19.071067817947551" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.363961034725435" y1="5.636038970913432" x2="19.071067811706598" y2="4.928932193901346" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.636038973367249" y1="5.636038979577279" x2="4.928932187975988" y2="4.92893219421785" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.363961035011016" y1="18.363961040649883" x2="19.071067812024012" y2="19.071067817631047" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SunBrightnessC.displayName = 'SunBrightnessC';

module.exports = SunBrightnessC;
module.exports.SunBrightnessC = SunBrightnessC;
module.exports.default = SunBrightnessC;
