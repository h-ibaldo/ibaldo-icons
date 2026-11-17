"use strict";

const { forwardRef } = require('react');

const TabChevronSwitch3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M14.050537069266284,21.997562039461627H4.050537064596938c-1.104569499671925,0-2-.895430500338989-2-2V3.997562039461627c0-1.104569499661011.895430500328075-2,2-2h2.929632483019304c.668706375819966,0,1.293169030790523.334202270717469,1.664100588670408.890599607547301l.812533856609662,1.218800784903578c.370931557879885.556397336827104.995394212850442.89059960754912,1.664100588670408.89059960754912h.929632487699564" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.050537069266284,8.99756203945708V3.997562039461627c0-1.104569499661011.895430500338989-2,2-2h2.929632483019304c.668706375819966,0,1.293169030790523.334202270717469,1.664100588681322.890599607547301l.812533856598748,1.218800784903578c.370931557890799.556397336827104.995394212859537.89059960754912,1.664100588681322.89059960754912h.929632483019304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.050537069266284,21.997562039461627h-8c-1.104569499661011,0-2-.895430500338989-2-2v-3.000000000004547" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.050537069266284 9.997562039461627 18.050537069266284 12.997562039461627 15.050537069266284 15.997562039461627" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.050537069266284" y1="12.99756203945708" x2="18.050537069266284" y2="12.99756203945708" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TabChevronSwitch3.displayName = 'TabChevronSwitch3';

module.exports = TabChevronSwitch3;
module.exports.TabChevronSwitch3 = TabChevronSwitch3;
module.exports.default = TabChevronSwitch3;
