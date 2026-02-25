"use strict";

const { forwardRef } = require('react');

const WarningExclamationTriangle22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.144270485036031,21.000000000479304h13.660921930029872c2.303468005597097,0,3.747569597209804-2.488446516097611,2.604729426369886-4.488416815068376l-6.830460965022212-11.953306688777957c-1.151682426607294-2.01544424657277-4.057776426128839-2.01544424657277-5.209458852739772,0l-6.830460965018574,11.953306688777957c-1.142840170839918,1.999970298970766.301261420758237,4.488416815068376,2.6047294263808,4.488416815068376Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450043691" y1="17.010000000480431" x2="11.974731450043691" y2="17.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450043691" y1="10.000000000479304" x2="11.974731450043691" y2="13.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationTriangle22.displayName = 'WarningExclamationTriangle22';

module.exports = WarningExclamationTriangle22;
module.exports.WarningExclamationTriangle22 = WarningExclamationTriangle22;
module.exports.default = WarningExclamationTriangle22;
