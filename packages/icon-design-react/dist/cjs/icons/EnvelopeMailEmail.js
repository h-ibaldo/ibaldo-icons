"use strict";

const { forwardRef } = require('react');

const EnvelopeMailEmail = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000000224645" y="5.032754075946286" width="20" height="14" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.619750976787145,5.590493333755148l8.711282688577739,7.840188429130649c.380305456468705.342276395560475.957627213248998.342276395560475,1.337932669717702,0l8.711282688579558-7.840188429130649" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

EnvelopeMailEmail.displayName = 'EnvelopeMailEmail';

module.exports = EnvelopeMailEmail;
module.exports.EnvelopeMailEmail = EnvelopeMailEmail;
module.exports.default = EnvelopeMailEmail;
