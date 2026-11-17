"use strict";

const { forwardRef } = require('react');

const MenuSideBarClose = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2.132132553721021,1.999999995256076h10.867867451179336c.552284749819592,0,1,.447715250171314,1,1v18c0,.552284749832324-.447715250180408,1-1,1H2.000000004900357" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.132132553721021" y1="6.999999995256076" x2="9.000000004900357" y2="6.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.132132553721021" y1="11.999999995256076" x2="9.000000004900357" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.132132553721021" y1="16.999999995256076" x2="9.000000004900357" y2="16.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.000000005029506 8.999999995325197 19.000000004900357 11.999999995186954 22.000000004760295 14.999999995325197" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MenuSideBarClose.displayName = 'MenuSideBarClose';

module.exports = MenuSideBarClose;
module.exports.MenuSideBarClose = MenuSideBarClose;
module.exports.default = MenuSideBarClose;
