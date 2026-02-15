"use strict";

const { forwardRef } = require('react');

const ApplicationWindowRocketLaunch = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.999999993649908,21.998779299956368h-2c-1.104569499660101,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499664649.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500335351,2,2v16c0,1.104569499661011-.895430500339899,2-2,2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993649908" y1="7.998779299956368" x2="21.999999993649908" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="10.999999993649908 18.998779299956368 11.999999993649908 21.998779299865419 12.999999993739948 18.998779299956368 10.999999993649908 18.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999993819984,18.998779299956368l-1.999999999849933-3,.000000000030013-1.757359312890912c.000000000010004-.795649469484488-.316070521050278-1.558711208155728-.878679656339955-2.121320343500884l-1.121320343519983-1.121320343608204-1.121320343830121,1.121320343612751c-.562609135489765.562609135358798-.878679656660097,1.325670874150092-.878679656660097,2.121320343772823v1.757359312614426l-2,2.999999999909051,4.00000000009004-.999999999956344,4.000000000080036,1.000000000047294Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.009999993640122" y1="4.998779299956368" x2="4.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.009999993640122" y1="4.998779299956368" x2="7.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.009999993640122" y1="4.998779299956368" x2="10.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindowRocketLaunch.displayName = 'ApplicationWindowRocketLaunch';

module.exports = ApplicationWindowRocketLaunch;
module.exports.ApplicationWindowRocketLaunch = ApplicationWindowRocketLaunch;
module.exports.default = ApplicationWindowRocketLaunch;
