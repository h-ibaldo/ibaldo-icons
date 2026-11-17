"use strict";

const { forwardRef } = require('react');

const ScanRescan3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="1.999999981189831 1.999996564258254 1.999999981189831 4.999996564254616 4.999999981189831 4.999996564254616" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.385253887439831,8.999996564258254c.699035644529431.61737060546875,1.607360839840112,1,2.61474609375,1,2.209167480459655,0,4-1.7908935546875,4-4,0-2.20916748046875-1.790832519540345-4-4-4-1.861694335939319,0-3.412475585939319,1.27777099609375-3.858581542970569,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.999999981189831,18.999996564258254v2c0,.552284749828686.4477152501604,1,1,1h16c.552284749830505,0,1-.447715250171314,1-1v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999981189831" y1="14.999996564258254" x2="16.999999981189831" y2="14.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.999999981189831,8.999996564258254l2-6c0-.55230712890625-.447692871099207-1-1-1h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="4.200012188219262 12.999996564258254 2.999999981189831 18.999996564258254 20.999999981189831 18.999996564258254 18.999999981189831 8.999996564258254 12.999999981189831 8.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ScanRescan3.displayName = 'ScanRescan3';

module.exports = ScanRescan3;
module.exports.ScanRescan3 = ScanRescan3;
module.exports.default = ScanRescan3;
