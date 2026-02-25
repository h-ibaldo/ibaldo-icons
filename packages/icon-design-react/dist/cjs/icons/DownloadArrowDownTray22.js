"use strict";

const { forwardRef } = require('react');

const DownloadArrowDownTray22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.974731450030959,5.000000027693204h-1.511938698540689c-.883216440819524,0-1.661862193390334.579336305973811-1.915652570309248,1.425304228478126l-2.445887589661652,8.152958626105828c-.083898023109214.27966007683608-.126521144409708.57006996419932-.126521144509752.862043656263268l-.000000001209628,3.559693489152778c-.000000000380169,1.104569499552781.895430499769645,2,1.999999999319698,2h16.000000001420631c1.104569499299032,0,1.999999999488864-.895430499773283,2-1.999999999073225l.000000001658918-3.559693491534745c.000000000120053-.291973692513238-.042623121069482-.582383580355781-.126521144218714-.862043657655704l-2.445887585439777-8.152958622582446c-.25379037670973-.845967922843556-1.032436129451526-1.42530422915388-1.915652570531165-1.42530422915388h-1.511938697978621" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.941894535959364,15.000000000459295h-5.967163085928405c-.552307128911707,0-1,.447692871094659-1,1,0,.55224609375-.447692871101026,1-1,1h-4c-.552307128911707,0-1-.44775390625-1-1,0-.552307128905341-.447692871101026-1-1-1H2.007568364089821" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.97473145261938 9.000000000459295 11.974731440010146 12.000000027693204 14.97473145261938 9.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731440010146" y1="3.000000000459295" x2="11.974731440010146" y2="12.000000027693204" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadArrowDownTray22.displayName = 'DownloadArrowDownTray22';

module.exports = DownloadArrowDownTray22;
module.exports.DownloadArrowDownTray22 = DownloadArrowDownTray22;
module.exports.default = DownloadArrowDownTray22;
