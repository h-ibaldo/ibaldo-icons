"use strict";

const { forwardRef } = require('react');

const WarningTriangleForbiddenBar3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="2.000000004471076" y1="20.000000003885361" x2="22.000000004471076" y2="6.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.447814945880964,18.286499027327409c.35797119138806.424194335932953.88287353513806.713500976557953,1.514404296858629.713500976557953h13.034912109391371c1.521240234358629,0,2.485534667959655-1.63092041015625,1.75244140625-2.9638671875l-3.637878417981483-6.61431884765625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.364379887269024,6.24493408591843l-1.132263183590112-2.0587158203125c-.759826660159888-1.381530761719659-2.744995117189319-1.381530761719659-3.5048828125,0l-4.744079589838293,8.625549316404431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningTriangleForbiddenBar3.displayName = 'WarningTriangleForbiddenBar3';

module.exports = WarningTriangleForbiddenBar3;
module.exports.WarningTriangleForbiddenBar3 = WarningTriangleForbiddenBar3;
module.exports.default = WarningTriangleForbiddenBar3;
