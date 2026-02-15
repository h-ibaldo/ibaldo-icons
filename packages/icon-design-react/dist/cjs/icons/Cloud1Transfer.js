"use strict";

const { forwardRef } = require('react');

const Cloud1Transfer = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="15.999999987550837 19.999999999818101 13.999999987639967 21.999999999909051 11.999999987550837 19.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999987368938" y1="15.999999999909051" x2="13.999999987639967" y2="21.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.999999987239789 12.00000000026921 9.999999986970579 9.999999999998181 11.999999987239789 11.999999999727152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999987780029" y1="15.999999999998181" x2="9.999999986970579" y2="9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18,15.999999999998181c2.209167480470569,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519529431-4-4-4h-.025207519529431c.014892578119543-.164916992180224.025207519529431-.331176757809772.025207519529431-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390630457-4.897277832029431,3.005187988270336-.034545898441138-.000610351560681-.068054199220569-.005187988270336-.102722167970569-.005187988270336-3.037536621101026,0-5.5,2.462463378909888-5.5,5.5,0,2.516784667959655,1.692565917970569,4.634033203130457,4,5.28759765625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud1Transfer.displayName = 'Cloud1Transfer';

module.exports = Cloud1Transfer;
module.exports.Cloud1Transfer = Cloud1Transfer;
module.exports.default = Cloud1Transfer;
