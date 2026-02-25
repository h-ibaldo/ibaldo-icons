"use strict";

const { forwardRef } = require('react');

const WifiSignalHotspot102 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.974731449501633" cy="12.000000000476575" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.803161625284702,14.828430176261463c.723815917966931-.72381591796875,1.171569824216931-1.723876953125,1.171569824216931-2.82843017578125,0-2.20916748046875-1.790832519527612-4-4-4-2.209167480466931,0-4,1.79083251953125-4,4,0,1.10455322265625.447692871097388,2.1046142578125,1.171569824222388,2.82843017578125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.924438480751633,16.949707031730213c1.266784667972388-1.26678466796875,2.05029296875-3.0167236328125,2.05029296875-4.94970703125,0-3.86602783203125-3.134033203125-7.000000000000909-7-7.000000000000909s-7,3.133972167969659-7,7.000000000000909c0,1.9329833984375.783508300783069,3.6829833984375,2.05029296875,4.94970703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.045776371376633,19.071044922355213c1.809631347658069-1.80963134765625,2.928955078125-4.30963134765625,2.928955078125-7.071044921875,0-5.52288818359375-4.477172851560681-10.000000000000909-10-10.000000000000909C6.451904301065952,2.000000000479304,1.974731449501633,6.477111816886463,1.974731449501633,12.000000000480213c0,2.76141357421875,1.119323730472388,5.26141357421875,2.928955078125,7.071044921875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.434826452226844" y1="20.900065242420169" x2="7.434826452226844" y2="20.910065242420387" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.410386799141634" y1="21.866883406431953" x2="10.410386799141634" y2="21.876883406432171" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.539076099856175" y1="21.866883406435591" x2="13.539076099856175" y2="21.876883406435809" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.514636446773693" y1="20.900065242420169" x2="16.514636446773693" y2="20.910065242420387" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449323372" y1="15.990000000476357" x2="11.974731449323372" y2="16.000000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.295947422728204" y1="18.46715672796563" x2="9.295947422728204" y2="18.46715672796563" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.295947422728204" y1="18.457156727965412" x2="9.295947422728204" y2="18.46715672796563" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449188766" y1="18.990000000476357" x2="11.974731449188766" y2="19.000000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.653515475694803" y1="18.457156728205518" x2="14.653515475694803" y2="18.467156728205737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WifiSignalHotspot102.displayName = 'WifiSignalHotspot102';

module.exports = WifiSignalHotspot102;
module.exports.WifiSignalHotspot102 = WifiSignalHotspot102;
module.exports.default = WifiSignalHotspot102;
