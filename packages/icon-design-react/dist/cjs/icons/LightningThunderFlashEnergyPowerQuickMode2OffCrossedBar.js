"use strict";

const { forwardRef } = require('react');

const LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar = forwardRef(({
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
    viewBox: "0 0 24 24.000000000000909",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="20.999999976489562" y1="20.998779299956368" x2="2.999999976489562" y2="2.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <polyline points="15.499999976489562 15.498779299956368 18.999999976489562 11.998779299956368 13.559997535090588 9.998779299956368 14.999999976489562 1.998779299956368 8.499999976489562 8.498779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="10.220336890559338 15.219116214018868 8.999999976489562 21.998840335112618 12.999999976489562 17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="5.999999976489562 10.998779299956368 4.999999976489562 11.998779299956368 8.162780738210131 13.161560061675118" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar.displayName = 'LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar';

module.exports = LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar;
module.exports.LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar = LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar;
module.exports.default = LightningThunderFlashEnergyPowerQuickMode2OffCrossedBar;
