"use strict";

const { forwardRef } = require('react');

const SaveFloppyDisk3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19.949462884242166,22.000000001200533l-16-.00000000144064c-1.104569499661011-.000000000098225-1.999999999919964-.89543050051725-1.999999999818101-2.000000000178261l.000000001091394-12.171572874911362c.000000000047294-.530432979616307.210713680779008-1.039140805340139.585786437626666-1.414213562191435l3.82842712474303-3.828427124746668c.375072756938607-.375072756942245.883780582811596-.58578643767396,1.414213562551595-.585786437626666l12.17157287559894.000000001095032c1.104569499661011.000000000098225,1.999999999919964.89543050051725,1.999999999825377,2.000000000178261l-.000000001437002,16c-.000000000101863,1.104569499661011-.895430500520888,1.999999999919964-2.000000000181899,1.999999999821739Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.94946288558458 2.000000000298314 7.949462885319008 8.000000000298314 17.949462885319008 8.000000000749424 17.94946288558458 2.000000000749424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885140747" cy="15.000000000476575" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SaveFloppyDisk3.displayName = 'SaveFloppyDisk3';

module.exports = SaveFloppyDisk3;
module.exports.SaveFloppyDisk3 = SaveFloppyDisk3;
module.exports.default = SaveFloppyDisk3;
