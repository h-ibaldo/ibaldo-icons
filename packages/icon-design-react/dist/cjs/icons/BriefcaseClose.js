"use strict";

const { forwardRef } = require('react');

const BriefcaseClose = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.49999649788149,6.000000002923827h.000007004759967c1.931700652459668,0,3.499996497161254,1.568295844701586,3.499996497161254,3.499996497161254v12.500003499913072H2.000000000561087v-12.500003499753923c0-1.931700652547504,1.568295844772898-3.499996497320403,3.499996497320403-3.499996497320403Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9,21.999999999998181h13v-12.500003499999366c0-1.932994691411295-1.56700180858752-3.499996500000634-3.499996499998815-3.499996500000634H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9" y1="15.999999999998181" x2="22" y2="15.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15" y="14.999999999998181" width="1" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8,5.999999999998181v-2c0-1.104569499659192.895430500338989-2,2-2h4c1.104569499661011,0,2,.895430500340808,2,2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BriefcaseClose.displayName = 'BriefcaseClose';

module.exports = BriefcaseClose;
module.exports.BriefcaseClose = BriefcaseClose;
module.exports.default = BriefcaseClose;
