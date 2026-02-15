"use strict";

const { forwardRef } = require('react');

const ArrowsAllOutOfCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="1.999999990797733" y1="2.000000000446562" x2="8.999999990797733" y2="9.000000000446562" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999990797733" y1="15.000000000446562" x2="21.999999990527613" y2="22.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999990482138" y1="22.000000000133696" x2="8.999999990797733" y2="15.000000000446562" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999990797733" y1="9.000000000446562" x2="21.999999991380719" y2="2.000000001302396" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.999999990796823,5.293701172323381c-.634094238280341-.188842773436591-1.304504394530341-.293701171875-2-.293701171875-.695495605467841,0-1.365905761717841.104858398438409-2,.293701171875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.999999990810466,18.706298828393301c.634094238262151.188842773494798,1.304504394503965.293701171991415,1.999999999974534.29370117205508.695495605466931.000000000064574,1.365905761725116-.104858398315628,2.000000000025466-.29370117169583" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.706298818930009,14.000000000442924c.188842773436591-.63409423828125.293701171875-1.30450439453125.293701171875-2s-.104858398438409-1.36590576171875-.293701171875-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.29370116285736,10.000000000453838c-.18884277349207.634094238264879-.293701171990506,1.304504394505784-.293701172052351,1.999999999974534-.000000000062755.69549560546875.104858398313809,1.365905761727845.293701171693101,2.000000000025466" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.999999990797733 7.000000000448381 1.999999990797733 2.000000000446562 6.999999991112418 2.000000000446562" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999990975994 17.000000000446562 21.999999990526703 22.000000000448381 16.999999990212018 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999990436663 22.000000000311957 1.999999990435754 22.000000000086402 1.999999990660399 16.999999999774445" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.999999991335244 2.000000000582077 21.999999991335244 2.000000001257831 21.999999990662218 7.000000001570697" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsAllOutOfCircle2.displayName = 'ArrowsAllOutOfCircle2';

module.exports = ArrowsAllOutOfCircle2;
module.exports.ArrowsAllOutOfCircle2 = ArrowsAllOutOfCircle2;
module.exports.default = ArrowsAllOutOfCircle2;
