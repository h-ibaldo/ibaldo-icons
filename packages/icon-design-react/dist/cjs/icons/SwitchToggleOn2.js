"use strict";

const { forwardRef } = require('react');

const SwitchToggleOn2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999987987565" y="7.999996572550543" width="20.000000000032401" height="7.999999985558645" rx="3.999995997897594" ry="3.999995997897594" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.999999557170668,15.999996564460162c-2.209136785710143.00000000199725-3.999995992890035-1.79085920372745-3.99999599270086-3.999995989430317v-.000008023846021c.000000000200089-2.209136785695591,1.790859207700123-3.99999599110015,3.999995993399352-3.999995988713636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleOn2.displayName = 'SwitchToggleOn2';

module.exports = SwitchToggleOn2;
module.exports.SwitchToggleOn2 = SwitchToggleOn2;
module.exports.default = SwitchToggleOn2;
