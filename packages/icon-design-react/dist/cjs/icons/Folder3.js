"use strict";

const { forwardRef } = require('react');

const Folder3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20,20.999999999998181H4.000000021309461c-1.104569499659192,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500340808-2,2-2h5.929633282419672c.668705935500839,0,1.293168239901206.334201833509724,1.664099899291614.890598573469106l.812536329349314,1.218802853061788c.370931659390408.556396739959382.995393963790775.890598573469106,1.664099899289795.890598573469106h5.929630485510643c1.10456949159925,0,1.999999987839146.895430489210412,1.999999996509359,1.999999980818757l.000000086320142,11.00000000349246c.000000008671122,1.104569505789186-.895430494210814,2.000000015688784-2,2.000000015688784Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2,8.999999999998181h7.929632483019304c.66870637583088,0,1.293169030790523-.334202270720198,1.664100588681322-.89059960755003l1.109400392448151-1.664100588681322c.185465778940852-.278198668409459.497697106431588-.445299803768648.832050294340661-.445299803768648" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Folder3.displayName = 'Folder3';

module.exports = Folder3;
module.exports.Folder3 = Folder3;
module.exports.default = Folder3;
