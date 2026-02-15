"use strict";

const { forwardRef } = require('react');

const RestoreTwoArrowsCircleCounterclockwise = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.9999999811007,7.999996564032699l-.000000000280124-3.999999999909051,4-.00000000026921" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.999999980909706,15.999996564483808l.000000000631189,3.999999999909051-4,.00000000062937" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.999999981519068,19.482357404327558c-2.411437988348553-1.614624023331999-4.000000000200089-4.362426757634239-4.000000000338332-7.482360839665489-.000000000220098-4.970581054683862,4.029418944908684-9.000000000181899,8.999999999599822-9.000000000403816.33856201171875-.000000000014552.671813964840112.021362304658396,1,.059509277300094" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.999999979379936,4.517635723741478c2.411437988490434,1.61462402311372,4.000000000580258,4.362426757274079,4.000000001000444,7.482360839305329.000000000660293,4.9705810546875-4.029418944101053,9.000000000542059-8.999999998781277,9.000000001211447-.33856201171875.000000000047294-.671813964849207-.021362304596551-1.000000000009095-.059509277209145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999981183009" cy="11.999996564258254" r="1.999999999998863" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

RestoreTwoArrowsCircleCounterclockwise.displayName = 'RestoreTwoArrowsCircleCounterclockwise';

module.exports = RestoreTwoArrowsCircleCounterclockwise;
module.exports.RestoreTwoArrowsCircleCounterclockwise = RestoreTwoArrowsCircleCounterclockwise;
module.exports.default = RestoreTwoArrowsCircleCounterclockwise;
