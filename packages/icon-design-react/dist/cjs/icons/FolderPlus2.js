"use strict";

const { forwardRef } = require('react');

const FolderPlus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19.999999893429958,20.999999999998181H3.999999914750333c-1.104569499670106,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500329894-2,2-2h3.929630589649605c.668705935499929,0,1.293168239900297.334201833509724,1.664099899289795.890598573469106l.812536329360228,1.218802853061788c.370931659380403.556396739959382.995393963779861.890598573469106,1.66409989927979.890598573469106h7.929633178269796c1.104569491600159,0,1.999999987840056.895430489210412,1.999999996510269,1.999999980818757l.000000086320142,11.00000000349246c.000000008670213,1.104569505789186-.895430494209904,2.000000015688784-2,2.000000015688784Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <line x1="14.999999978690539" y1="12.999999999998181" x2="8.999999978690539" y2="12.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999978690539" y1="15.999999999998181" x2="11.999999978690539" y2="9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

FolderPlus2.displayName = 'FolderPlus2';

module.exports = FolderPlus2;
module.exports.FolderPlus2 = FolderPlus2;
module.exports.default = FolderPlus2;
