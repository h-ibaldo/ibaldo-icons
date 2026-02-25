"use strict";

const { forwardRef } = require('react');

const ShoppingBag92 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18.945960716129775,21.000003996827218H5.054039283870225c-.482058085350218,0-.895504404939857-.343911699237651-.983282005010551-.817910739930085l-1.85185184968941-9.999999994837708c-.113847315740713-.614775505371654.358053939969977-1.182089260069915.983282004999637-1.182089260069915h17.595625131649285c.625228065040574,0,1.097129320740351.567313754698262.983282005010551,1.182089260069915l-1.851851849700324,9.999999994837708c-.087777600068875.473999040692433-.501223919658514.817910739930085-.983282004999637.817910739930085Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.999999986550392,9.00000400198951l.000000035790436-2.000005097510439c.000000049418304-2.76142094835086,2.238574043618428-4.999994902489561,4.999994991969288-4.999994902489561h.000009999999747c2.761420976299632,0,4.999994982079443,2.238573997758067,4.999994991969288,4.999994974066794l.000000007161361,2.000005025933206" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ShoppingBag92.displayName = 'ShoppingBag92';

module.exports = ShoppingBag92;
module.exports.ShoppingBag92 = ShoppingBag92;
module.exports.default = ShoppingBag92;
