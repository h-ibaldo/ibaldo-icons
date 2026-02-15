"use strict";

const { forwardRef } = require('react');

const Briefcase14 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="6.999999999998181" width="20" height="14" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.999999999989086,6.999999999998181v-3c0-.552284749830505.447715250171314-1,1-1h6.000000000010914c.552284749829596,0,1,.447715250169495,1,1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2,10.999999999998181c2.20916748046875,0,4-1.790832519529431,4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18,6.999999999998181c0,2.209167480470569,1.79083251953125,4,4,4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.00000000018008,17.000000000898581c-2.20916748046875-.000000000200089-4.000000000160071,1.790832519169271-4.00000000036016,3.99999999963984" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.99999999981992,20.999999999457941c.000000000200089-2.20916748046875-1.790832519169271-4.000000000160071-3.99999999963984-4.00000000036016" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Briefcase14.displayName = 'Briefcase14';

module.exports = Briefcase14;
module.exports.Briefcase14 = Briefcase14;
module.exports.default = Briefcase14;
