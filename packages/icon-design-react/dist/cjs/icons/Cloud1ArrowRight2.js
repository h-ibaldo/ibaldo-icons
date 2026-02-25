"use strict";

const { forwardRef } = require('react');

const Cloud1ArrowRight2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="8 14.999999999718057 11 17.999999999718057 8 20.999999999718057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="17.999999999718057" x2="11" y2="17.999999999718057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16,17.999999999718057h2c2.209167480459655,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519540345-4-4-4h-.025207519540345c.014892578130457-.164916992180224.025207519540345-.331176757810681.025207519540345-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390631366-4.897277832040345,3.005187988270336-.034545898429315-.000610351560681-.068054199209655-.005187988270336-.102722167959655-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,.169921875.020446777340112.334289550770336.036193847649884.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud1ArrowRight2.displayName = 'Cloud1ArrowRight2';

module.exports = Cloud1ArrowRight2;
module.exports.Cloud1ArrowRight2 = Cloud1ArrowRight2;
module.exports.default = Cloud1ArrowRight2;
