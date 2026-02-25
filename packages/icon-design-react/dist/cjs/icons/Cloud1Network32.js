"use strict";

const { forwardRef } = require('react');

const Cloud1Network32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="5" y1="20.999999999718057" x2="18.999999999996362" y2="20.999999999718057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="15.999999999718057" x2="12" y2="21.999999999718057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999999999091" cy="20.999999999718057" r=".999999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.999999999996362,7.999999999718057h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.138366699216022,0-3.98736572265625,1.222900390631366-4.897277832026703,3.005187988270336-.034545898439319-.000610351560681-.068054199219659-.005187988270336-.102722167969659-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378899884,5.5,5.5,5.5h10.499999999996362c2.20916748046875,0,4-1.790832519540345,4-4,0-2.209167480479664-1.79083251953125-4-4-4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud1Network32.displayName = 'Cloud1Network32';

module.exports = Cloud1Network32;
module.exports.Cloud1Network32 = Cloud1Network32;
module.exports.default = Cloud1Network32;
