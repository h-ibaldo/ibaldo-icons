"use strict";

const { forwardRef } = require('react');

const ConnectCircle3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.99999999963984" cy="19.999999999998181" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.794228633970079" cy="6.500000000466116" r="2.000000000002318" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="4.205771366119961" cy="6.499999999063448" r="1.999999999999203" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.977294921880457,19.775146484367724c4.01806640625-.902099609369543,7.022705078119543-4.484741210929315,7.022705078119543-8.775146484369543,0-.9326171875-.14208984375-1.832153320309772-.4052734375-2.678100585939319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.4052734375,8.321899414058862c-.26318359375.845947265629547-.4052734375,1.745483398439319-.4052734375,2.678100585939319,0,4.290405273440228,3.004638671880457,7.873046875,7.022705078130457,8.775146484369543" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.606689453130457,4.903076171867724c-1.644287109380457-1.781005859369543-3.991455078130457-2.903076171869543-6.606689453130457-2.903076171869543s-4.96240234375,1.1220703125-6.606689453119543,2.903076171869543" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ConnectCircle3.displayName = 'ConnectCircle3';

module.exports = ConnectCircle3;
module.exports.ConnectCircle3 = ConnectCircle3;
module.exports.default = ConnectCircle3;
