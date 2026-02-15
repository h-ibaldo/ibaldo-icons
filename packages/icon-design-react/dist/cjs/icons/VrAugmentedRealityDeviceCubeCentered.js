"use strict";

const { forwardRef } = require('react');

const VrAugmentedRealityDeviceCubeCentered = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.999999977619154" y="1.999996563117747" width="18" height="20" rx="1.999999999998434" ry="1.999999999998434" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="11.999999977490006 12.999996563117747 16.999999977890184 9.999996563787136 11.999999978299456 6.999996563117747 6.999999977890184 9.999996562444721 11.999999977490006 12.999996563117747" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999977890184 9.999996562444721 6.999999977258994 14.999996562444721 11.999999976860636 17.999996563117747 16.999999977258994 14.999996563787136 16.999999977890184 9.999996563787136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977490006" y1="12.999996563117747" x2="11.999999976860636" y2="17.999996563117747" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.999999979039785 1.999996561859007 8.999999978950655 2.999996561859007 14.999999978950655 2.999996562401066 14.999999979039785 1.999996562401066" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

VrAugmentedRealityDeviceCubeCentered.displayName = 'VrAugmentedRealityDeviceCubeCentered';

module.exports = VrAugmentedRealityDeviceCubeCentered;
module.exports.VrAugmentedRealityDeviceCubeCentered = VrAugmentedRealityDeviceCubeCentered;
module.exports.default = VrAugmentedRealityDeviceCubeCentered;
