"use strict";

const { forwardRef } = require('react');

const PaidSearchDollarWindow2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.999999976482286,21.998779299956368H3.999999976442268c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.009999976493418" y1="5.998779299956368" x2="5.9999999764932" y2="5.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.009999976493418" y1="5.998779299956368" x2="8.9999999764932" y2="5.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.9999999764932" y1="5.998779299956368" x2="11.9999999764932" y2="5.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.999999976482286" cy="15.998779299956368" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.171569800702855" y1="18.827209475737618" x2="11.999999976482286" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.999999976482286,10.998779299956368h-2.500001500000508c-.828426296318867,0-1.499998499999492.671572203678807-1.499998499999492,1.499998499999492v.000003000001016c0,.828426296317048.671572203680626,1.499998499999492,1.499998499999492,1.499998499999492h1.000003000001016c.828426296320686,0,1.499998499999492.671572203678807,1.499998499999492,1.499998499999492v.000003000001016c0,.828426296317048-.671572203678807,1.499998499999492-1.499998499999492,1.499998499999492h-2.500001500000508" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999976482286" y1="17.998779299956368" x2="7.999999976482286" y2="16.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999976482286" y1="10.998779299956368" x2="7.999999976482286" y2="9.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PaidSearchDollarWindow2.displayName = 'PaidSearchDollarWindow2';

module.exports = PaidSearchDollarWindow2;
module.exports.PaidSearchDollarWindow2 = PaidSearchDollarWindow2;
module.exports.default = PaidSearchDollarWindow2;
