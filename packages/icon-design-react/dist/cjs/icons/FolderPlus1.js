'use strict';

const { createElement, forwardRef } = require('react');

const FolderPlus1 = forwardRef(function FolderPlus1(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M11.999999978690539,20.999999999998181H3.999999985619979c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.92963058965961c.668705935500839,0,1.293168239890292.334201833509724,1.6640998992807.890598573469106l.812536329360228,1.218802853061788c.370931659389498.556396739959382.995393963788956.890598573469106,1.664099899289795.890598573469106h7.929633174770061c1.104569483929481,0,1.999999977759217.895430475789908,2,1.999999959721208l.000000100710167,5.000000040278792","key":"0"}),
    createElement('line', {"x1":"18.999999978679625","y1":"21.999999999998181","x2":"18.999999978679625","y2":"15.999999999998181","key":"1"}),
    createElement('line', {"x1":"15.999999978690539","y1":"18.999999999998181","x2":"21.999999978690539","y2":"18.999999999998181","key":"2"})
  );
});

FolderPlus1.displayName = 'FolderPlus1';

module.exports = FolderPlus1;
module.exports.FolderPlus1 = FolderPlus1;
module.exports.default = FolderPlus1;
