"use strict";

const { forwardRef } = require('react');

const LightningThunderFlashEnergyPowerQuickMode12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="18.999999976489562 9.998779299956368 12.999999976489562 9.998779299956368 12.999999976489562 1.998779299956368 4.999999976489562 13.998779299956368 10.999999976489562 13.998779299956368 10.999999976489562 21.998840335112618 18.999999976489562 9.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LightningThunderFlashEnergyPowerQuickMode12.displayName = 'LightningThunderFlashEnergyPowerQuickMode12';

module.exports = LightningThunderFlashEnergyPowerQuickMode12;
module.exports.LightningThunderFlashEnergyPowerQuickMode12 = LightningThunderFlashEnergyPowerQuickMode12;
module.exports.default = LightningThunderFlashEnergyPowerQuickMode12;
