"use strict";

const { forwardRef } = require('react');

const CloudUnlock = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="7.999999999996362" y="14.999999999718057" width="8" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.221435546871362,10.999999999718057c-.54913330078125-.609558105479664-1.33642578125-1-2.221435546875-1-1.6568603515625,0-3,1.343139648439319-3,3v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.999999999996362,15.858581542677712c1.72222900390625-.446044921860448,3-1.996826171860448,3-3.858581542959655,0-2.209167480479664-1.79083251953125-4-4-4h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,2.136352539069776,1.220458984375,3.983947753909888,3,4.894775390631366" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CloudUnlock.displayName = 'CloudUnlock';

module.exports = CloudUnlock;
module.exports.CloudUnlock = CloudUnlock;
module.exports.default = CloudUnlock;
