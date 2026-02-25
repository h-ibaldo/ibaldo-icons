"use strict";

const { forwardRef } = require('react');

const WifiSignalHotspot92 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.732090762481675,16.242640687531093c-2.343145750430267-2.343145750324766-2.343145750513941-6.14213562380246-.000000000190994-8.485281374236365,2.343145750330223-2.343145750429358,6.142135623809736-2.34314575051576,8.485281374240003-.000000000192813,2.343145750432086,2.343145750328404,2.343145750517579,6.142135623809736.000000000190994,8.485281374240003" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.903663637798672,19.071067812343244c-3.905242917384385-3.905242917211581-3.905242917526266-10.236892706347135-.000000000316504-14.142135623732429,3.905242917211581-3.905242917386204,10.236892706343497-3.905242917528085,14.142135623731519-.000000000316504,3.905242917386204,3.905242917214309,3.905242917528085,10.236892706342587.000000000316504,14.142135623728791" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.974731449501633" cy="12.000000000476575" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.434826452226844" y1="20.900065242420169" x2="7.434826452226844" y2="20.910065242420387" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.410386799141634" y1="21.866883406431953" x2="10.410386799141634" y2="21.876883406432171" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.539076099856175" y1="21.866883406435591" x2="13.539076099856175" y2="21.876883406435809" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.514636446773693" y1="20.900065242420169" x2="16.514636446773693" y2="20.910065242420387" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.421817178672427" y1="17.785554958152716" x2="10.421817178672427" y2="17.795554958152934" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.527645719814245" y1="17.785554958290959" x2="13.527645719814245" y2="17.795554958291177" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WifiSignalHotspot92.displayName = 'WifiSignalHotspot92';

module.exports = WifiSignalHotspot92;
module.exports.WifiSignalHotspot92 = WifiSignalHotspot92;
module.exports.default = WifiSignalHotspot92;
