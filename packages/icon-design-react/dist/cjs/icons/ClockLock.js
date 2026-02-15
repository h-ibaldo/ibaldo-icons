"use strict";

const { forwardRef } = require('react');

const ClockLock = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2" y="17.999999999887223" width="7" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3,17.999999999887223l.000000018630089-2.500002487569873c.000000010280928-1.380710486588214,1.119287013409121-2.499997512430127,2.499997499999154-2.499997512430127h.000005000001693c1.380710489009289,0,2.499997462078682,1.11928699856071,2.499997468938091,2.499997487571818l.000000012430974,2.500002512428182" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13,21.949462890508585c5.053283691409888-.501831054680224,9-4.76416015625,9-9.949462890621362,0-5.522827148439319-4.477111816409888-10-10-10C7.162170410159888,1.999999999887223,3.127502441409888,5.435546874887223,2.200866699220569,9.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ClockLock.displayName = 'ClockLock';

module.exports = ClockLock;
module.exports.ClockLock = ClockLock;
module.exports.default = ClockLock;
