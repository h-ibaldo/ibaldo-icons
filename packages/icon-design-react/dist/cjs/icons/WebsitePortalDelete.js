"use strict";

const { forwardRef } = require('react');

const WebsitePortalDelete = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.999999996369297,9.999999999998181V3.999999999998181c0-1.104569499661011-.895430500338989-2-2-2H3.999999996369297c-1.104569499659192,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500340808,2,2,2h6.000000003630703" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000000218" y1="4.999999999998181" x2="5" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000000218" y1="4.999999999998181" x2="8" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19" y1="4.999999999998181" x2="11" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="7.999999999998181" x2="22" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.999999996369297,13.999999999998181v7c0,.552284749832324.447715250169495,1,1,1h5c.552284749830505,0,1-.447715250167676,1-1v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.999999996369297" y1="13.999999999998181" x2="21.999999996369297" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.999999996369297 13.999999999998181 15.999999996369297 11.999999999998181 18.999999996369297 11.999999999998181 18.999999996369297 13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WebsitePortalDelete.displayName = 'WebsitePortalDelete';

module.exports = WebsitePortalDelete;
module.exports.WebsitePortalDelete = WebsitePortalDelete;
module.exports.default = WebsitePortalDelete;
