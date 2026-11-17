"use strict";

const { forwardRef } = require('react');

const TabChevronSwitch1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20.050537060256829,21.997562041643505H4.050537060256829c-1.104569499670106,0-2-.895430500338989-2-2V3.997562041643505c0-1.104569499661011.895430500329894-2,2-2h12.558125457539063c.911351166319946,0,1.773289868129723.414269157099625,2.342606428319414,1.125914857338103l2.441874542470032,3.052343178073897c.425551315511257.531939144389071.657393571671491,1.192870657007006.657393571671491,1.874085142660078v11.947656821927922c0,1.104569499661011-.895430500340808,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.050537060256829 10.997562041643505 11.050537060256829 13.997562041643505 8.050537060256829 16.997562041643505" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.050537060256829 10.997562041643505 16.050537060256829 13.997562041643505 13.050537060256829 16.997562041643505" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.050537060256829,1.997562041643505h1.558125457539063c.91135116633086,0,1.773289868141546.414269157099625,2.342606428319414,1.125914857338103l2.198536228262128,2.748170285324704c.569316560197876.711645700237568,1.431255261998558,1.125914857337193,2.342606428327599,1.125914857337193h2.558125457551796" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TabChevronSwitch1.displayName = 'TabChevronSwitch1';

module.exports = TabChevronSwitch1;
module.exports.TabChevronSwitch1 = TabChevronSwitch1;
module.exports.default = TabChevronSwitch1;
