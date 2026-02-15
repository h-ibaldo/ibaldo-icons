"use strict";

const { forwardRef } = require('react');

const SaveFloppyDisk1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.949462885590037,22.000000000840373l16-.00000000072032c1.104569499661011-.000000000050932,1.999999999959982-.895430500429939,1.99999999991087-2.000000000090949l-.000000000547516-12.171572874907724c-.000000000025466-.530432979616307-.210713680728077-1.039140805351053-.585786437564821-1.414213562220539l-3.828427124570226-3.828427124917653c-.375072756925874-.375072756956797-.883780582784311-.585786437713978-1.414213562527948-.58578643769215l-12.17157287559894.000000000549335c-1.104569499661011.000000000047294-1.999999999959982.895430500426301-1.99999999991087,2.000000000087311l.00000000072032,16c.000000000049113,1.104569499661011.89543050042812,1.999999999959982,2.00000000008913,1.999999999912689Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.949462885142566 2.000000000480213 15.949462885142566 8.000000000480213 5.949462885142566 8.000000000480213 5.949462885142566 2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.949462885142566 22.000000000480213 17.949462885142566 14.000000000480213 5.949462885142566 14.000000000480213 5.949462885142566 22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SaveFloppyDisk1.displayName = 'SaveFloppyDisk1';

module.exports = SaveFloppyDisk1;
module.exports.SaveFloppyDisk1 = SaveFloppyDisk1;
module.exports.default = SaveFloppyDisk1;
