"use strict";

const { forwardRef } = require('react');

const SwitchKnobButton12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.99999997708619" cy="11.997562035419833" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067788796427" y1="4.926494223393092" x2="14.828427101776469" y2="9.169134910611319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchKnobButton12.displayName = 'SwitchKnobButton12';

module.exports = SwitchKnobButton12;
module.exports.SwitchKnobButton12 = SwitchKnobButton12;
module.exports.default = SwitchKnobButton12;
