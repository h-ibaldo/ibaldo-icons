"use strict";

const { forwardRef } = require('react');

const OnlineShopStoreEcommerce11MobilePhoneCart = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="5.050537117662316" y="1.998782732995096" width="14" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.050537117662316" y1="4.998782732995096" x2="19.050537117662316" y2="4.998782732995096" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.050537117662316" y1="18.998782732995096" x2="19.050537117662316" y2="18.998782732995096" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.050537117662316 8.998782732995096 10.050537117662316 8.998782732995096 11.050537117662316 12.998782732995096 14.050537117662316 12.998782732995096 15.050537117662316 9.998782732995096 10.550537117662316 9.998782732995096" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.050537117662316" y1="14.998782732995096" x2="11.050537117662316" y2="14.998782732995096" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.050537117662316" y1="14.998782732995096" x2="14.050537117662316" y2="14.998782732995096" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

OnlineShopStoreEcommerce11MobilePhoneCart.displayName = 'OnlineShopStoreEcommerce11MobilePhoneCart';

module.exports = OnlineShopStoreEcommerce11MobilePhoneCart;
module.exports.OnlineShopStoreEcommerce11MobilePhoneCart = OnlineShopStoreEcommerce11MobilePhoneCart;
module.exports.default = OnlineShopStoreEcommerce11MobilePhoneCart;
