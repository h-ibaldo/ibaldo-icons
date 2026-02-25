"use strict";

const { forwardRef } = require('react');

const LightningThunderFlashEnergyPowerQuickMode32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="18.999999976489562 9.998840335112618 13.999999976489562 9.998779299956368 17.999999976489562 1.998779299956368 8.999999976489562 1.998779299956368 4.999999976489562 11.998779299956368 9.333312964779907 11.998779299956368 5.999999976489562 21.998840335112618 18.999999976489562 9.998840335112618" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LightningThunderFlashEnergyPowerQuickMode32.displayName = 'LightningThunderFlashEnergyPowerQuickMode32';

module.exports = LightningThunderFlashEnergyPowerQuickMode32;
module.exports.LightningThunderFlashEnergyPowerQuickMode32 = LightningThunderFlashEnergyPowerQuickMode32;
module.exports.default = LightningThunderFlashEnergyPowerQuickMode32;
