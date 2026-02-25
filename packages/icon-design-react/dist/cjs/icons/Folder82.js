"use strict";

const { forwardRef } = require('react');

const Folder82 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20,20.999999999998181H4.000000021309461c-1.104569499659192,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500340808-2,2-2h3.929630589660519c.66870593549902,0,1.293168239899387.334201833509724,1.664099899289795.890598573469106l.812536329360228,1.218802853061788c.370931659379494.556396739959382.995393963779861.890598573469106,1.6640998992807.890598573469106h7.929633178269796c1.10456949159925,0,1.999999987839146.895430489210412,1.999999996509359,1.999999980818757l.000000086320142,11.00000000349246c.000000008671122,1.104569505789186-.895430494210814,2.000000015688784-2,2.000000015688784Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6" y1="10.999999999998181" x2="13" y2="10.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6" y1="13.999999999998181" x2="11" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Folder82.displayName = 'Folder82';

module.exports = Folder82;
module.exports.Folder82 = Folder82;
module.exports.default = Folder82;
