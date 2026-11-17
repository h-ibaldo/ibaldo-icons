"use strict";

const { forwardRef } = require('react');

const Door3ArrowOut = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M15.974731450043691,14.731182180869837v2.268817819611286c0,.552284749828686-.447715250166766,1-1,1h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731450043691,18.000000000481123V3.000000000479304c0-.552284749830505.447715250171314-1,1-1h12c.552284749833234,0,1,.447715250169495,1,1v1.731182180390533" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731450043691,18.000000000481123l8.296930766973674,3.68752478532133c.330643698467611.146952754875201.703069233026326-.095076577726104.703069233026326-.456905774311053V6.324936545025594c0-.197594358243805-.116366760468736-.376655104755628-.296930766972764-.456905774311053L2.413085942231191,2.194824219231123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.974731450043691 6.731182180869837 21.974731450047329 9.731182180871656 18.974731450043691 12.731182180869837" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.974731450043691" y1="9.731182180869837" x2="21.974731450047329" y2="9.731182180871656" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Door3ArrowOut.displayName = 'Door3ArrowOut';

module.exports = Door3ArrowOut;
module.exports.Door3ArrowOut = Door3ArrowOut;
module.exports.default = Door3ArrowOut;
