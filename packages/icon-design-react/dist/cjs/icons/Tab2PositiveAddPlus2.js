"use strict";

const { forwardRef } = require('react');

const Tab2PositiveAddPlus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="13.12453666833062 21.998782737328838 2.025268554200011 21.998782737328838 2.025268554200011 1.998782737328838 11.025268554200011 1.998782737328838 11.025268554200011 5.998782737328838 22.025268554200011 5.998782737328838 22.025268554200011 12.872867879995283" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.025268554200011" y1="1.998782737328838" x2="15.025268554200011" y2="1.998782737328838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.025268554189097" y1="21.998782737328838" x2="19.025268554189097" y2="15.998782737328838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.025268554200011" y1="18.998782737328838" x2="22.025268554200011" y2="18.998782737328838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Tab2PositiveAddPlus2.displayName = 'Tab2PositiveAddPlus2';

module.exports = Tab2PositiveAddPlus2;
module.exports.Tab2PositiveAddPlus2 = Tab2PositiveAddPlus2;
module.exports.default = Tab2PositiveAddPlus2;
