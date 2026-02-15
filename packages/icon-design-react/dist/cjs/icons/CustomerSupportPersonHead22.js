"use strict";

const { forwardRef } = require('react');

const CustomerSupportPersonHead22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.999999990599463,14.000008005168638v-4.000015999998141c0-4.418273580373352,3.581718419631216-7.99999200000093,7.999992000010025-7.99999200000093h.000015999990865c4.418273580369714,0,7.999991999999111,3.581718419627578,7.999991999999111,7.99999200000093v4.000015999998141c0,4.418273580369714-3.581718419629397,7.99999200000093-7.999991999999111,7.99999200000093h-.000015999990865" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.999999979352651" y="5.000000002704496" width="10.000000013465524" height="14" rx="4.999995004884275" ry="4.999995004884275" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.999999990599463,10.000000005169568l-1.003035955969608.003045187040698c-.551096966089972.001673113838478-.996964044030392.44889588562728-.996964044030392.999995391470293v1.996959421489009c0,.552284749828686.447715250171314,1,1,1h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.999999990599463,10.000000005169568l1.003035955980522.003045187040698c.551096966089972.001673113838478.996964044019478.44889588562728.996964044019478.999995391470293v1.996959421489009c0,.552284749828686-.447715250169495,1-1,1h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CustomerSupportPersonHead22.displayName = 'CustomerSupportPersonHead22';

module.exports = CustomerSupportPersonHead22;
module.exports.CustomerSupportPersonHead22 = CustomerSupportPersonHead22;
module.exports.default = CustomerSupportPersonHead22;
