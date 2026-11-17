"use strict";

const { forwardRef } = require('react');

const Bulb20 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="2" y1="12.046448520648482" x2="3" y2="12.046448520737613" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="12.046448520748527" x2="21" y2="12.046448520748527" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.92893218800964" y1="4.975380708958255" x2="5.636038969150832" y2="5.682487490197673" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.07106781199036" y1="19.117516332436935" x2="18.363961030790961" y2="18.410409551277553" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.07106781173934" y1="4.975380708707235" x2="18.363961030510836" y2="5.682487489848427" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.92893218826066" y1="19.117516332687956" x2="5.636038969430956" y2="18.410409551488556" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000000949512" y1="2.046448520708509" x2="12.000000000860382" y2="3.046448520697595" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7,12.046448520708509c0,1.279855672819394.486050175879427,2.439275457240001,1.280036187079531,3.318818965659375.907721667259466,1.005534969919609,1.442345269440921,2.293181854160139,1.708029945490125,3.621515718021328l.011933867430344.059665316319297h4l.011933867430344-.059665316319297c.265684676049204-1.328333863861189.800308278230659-2.61598074810172,1.708029945490125-3.621515718021328.793986011200104-.879543508419374,1.280036187079531-2.038963292839981,1.280036187079531-3.318818965659375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17,12.046448520708509c0-2.761413574220569-2.238525390630457-5-5-5-2.761474609380457,0-5,2.238586425779431-5,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="22.046448520708509" x2="13" y2="22.046448520708509" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bulb20.displayName = 'Bulb20';

module.exports = Bulb20;
module.exports.Bulb20 = Bulb20;
module.exports.default = Bulb20;
