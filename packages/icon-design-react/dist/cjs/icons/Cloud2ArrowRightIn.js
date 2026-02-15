"use strict";

const { forwardRef } = require('react');

const Cloud2ArrowRightIn = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="8.000000000014552 14.999999973497324 11.000000000014552 17.999999973497324 8.000000000014552 20.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000014552" y1="17.999999973497324" x2="11.000000000014552" y2="17.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.000000000014552,17.999999973497324h2c2.20916748046875,0,4-1.790832519538526,4-4,0-1.866821289058862-1.284423828125-3.421691894538526-3.0137939453125-3.862854003898974.0015869140625-.046569824229664.0137939453125-.09014892578125.0137939453125-.137145996101026,0-2.20916748046875-1.79083251953125-4-4-4-.1370849609375,0-.2667236328125.02685546875-.4002685546875.04034423828125-.76239013671875-1.787048339840112-2.53411865234375-3.04034423828125-4.5997314453125-3.04034423828125-2.76141357421875,0-5,2.23858642578125-5,5,0,.137084960941138.029541015625.265869140621362.04034423828125.40020751953125-1.78704833984375.76239013671875-3.04034423828125,2.5341796875-3.04034423828125,4.59979248046875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud2ArrowRightIn.displayName = 'Cloud2ArrowRightIn';

module.exports = Cloud2ArrowRightIn;
module.exports.Cloud2ArrowRightIn = Cloud2ArrowRightIn;
module.exports.default = Cloud2ArrowRightIn;
