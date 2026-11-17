"use strict";

const { forwardRef } = require('react');

const WifiSignal6 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.974731449501633" cy="13.000000000476575" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.803161625283792,15.828430176261463c.723815917967841-.72381591796875,1.171569824217841-1.723876953125,1.171569824217841-2.82843017578125,0-2.20916748046875-1.790832519527612-4-4-4-2.209167480467841,0-4,1.79083251953125-4,4,0,1.10455322265625.447692871091022,2.1046142578125,1.171569824222388,2.82843017578125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.924438480751633,17.949707031730213c1.266784667972388-1.26678466796875,2.05029296875-3.0167236328125,2.05029296875-4.94970703125,0-3.86602783203125-3.134033203127728-7.000000000000909-7-7.000000000000909-3.865966796877728,0-7,3.133972167969659-7,7.000000000000909,0,1.9329833984375.783508300782159,3.6829833984375,2.05029296875,4.94970703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.045776371373904,20.071044922355213c1.809631347659888-1.80963134765625,2.928955078127728-4.30963134765625,2.928955078127728-7.071044921875,0-5.52288818359375-4.477172851557953-10.000000000000909-10-10.000000000000909C6.451904301063223,3.000000000479304,1.974731449501633,7.477111816886463,1.974731449501633,13.000000000480213c0,2.76141357421875,1.119323730472388,5.26141357421875,2.928955078122272,7.071044921875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449501633" y1="22.000000000476575" x2="11.974731449501633" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WifiSignal6.displayName = 'WifiSignal6';

module.exports = WifiSignal6;
module.exports.WifiSignal6 = WifiSignal6;
module.exports.default = WifiSignal6;
