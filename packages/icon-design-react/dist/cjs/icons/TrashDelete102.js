"use strict";

const { forwardRef } = require('react');

const TrashDelete102 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.999999989689968,10.000000001075932l.00000000062937,10.000000001618901c.000000000050932,1.104569499661011.895430500420844,1.999999999959982,2.000000000090949,1.99999999990996l8.00000000080945-.000000000448381c1.104569499659192-.000000000051841,1.999999999959982-.895430500430848,1.99999999991087-2.000000000091859l-.000000000631189-10.000000001616172" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.999999989780918,10.0000000004502l.00000000062937-2.000000000090949c.000000000049113-1.104569499661011-.895430500240764-2.000000000040018-1.99999999991087-2.00000000008913l-12.00000000008913-.00000000044929c-1.104569499661011-.000000000049113-2.000000000040018.895430500249859-2.000000000090949,1.99999999991087l-.00000000062937,2.00000000008913,16.000000000090949.00000000062937Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999990410288" y1="2.000000000448381" x2="13.999999990410288" y2="2.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999990410288" y1="14.000000000446562" x2="9.999999990410288" y2="18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999990410288" y1="14.000000000446562" x2="13.999999990410288" y2="18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashDelete102.displayName = 'TrashDelete102';

module.exports = TrashDelete102;
module.exports.TrashDelete102 = TrashDelete102;
module.exports.default = TrashDelete102;
