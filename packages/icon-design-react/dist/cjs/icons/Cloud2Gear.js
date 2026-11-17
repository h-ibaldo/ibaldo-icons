"use strict";

const { forwardRef } = require('react');

const Cloud2Gear = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<g>
  <circle cx="12.000000000005002" cy="16.999999999995907" r="3.500000000002368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000000010914" y1="16.989999999997963" x2="12.000000000010914" y2="16.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.106756913290155" y1="12.372297479888402" x2="10.674729839309293" y2="13.760608235908876" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.325270160699802" y1="20.239391764078391" x2="13.893243086720759" y2="21.627702520097955" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.627702520119783" y1="15.106756913288336" x2="15.23939176408021" y2="15.674729839298379" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.760608235930704" y1="18.325270160697983" x2="7.372297479900226" y2="18.893243086708026" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.611004858379602" y1="18.933554808128974" x2="15.227703400869359" y2="18.353488365688463" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.772296599139736" y1="15.646511634298804" x2="7.388995141629493" y2="15.066445191867388" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.066445191871026" y1="21.611004858368688" x2="10.646511634309718" y2="20.227703400858445" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.353488365701196" y1="13.772296599127003" x2="13.933554808139888" y2="12.38899514161858" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M20,17.445251464838293c1.190673828130457-.692932128899884,2-1.968444824229664,2-3.445251464840112,0-1.866821289059772-1.284423828119543-3.421691894540345-3.013793945308862-3.862854003909888.001586914058862-.046569824229664.013793945308862-.090148925790345.013793945308862-.137145996090112,0-2.209167480470569-1.790771484369543-4-4-4-.137084960930224,0-.266723632808862.02685546875-.400268554680224.040344238279431-.762329101569776-1.787048339839203-2.534057617189319-3.040344238279431-4.599731445319776-3.040344238279431-2.76141357421875,0-5,2.238586425779431-5,5,0,.137084960940228.029541015630457.265869140610448.04034423828125.400207519529431-1.787048339840112.762390136720569-3.04034423828125,2.5341796875-3.04034423828125,4.599792480470569,0,1.630493164049767.792236328130457,3.064636230459655,2,3.977355957029431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud2Gear.displayName = 'Cloud2Gear';

module.exports = Cloud2Gear;
module.exports.Cloud2Gear = Cloud2Gear;
module.exports.default = Cloud2Gear;
