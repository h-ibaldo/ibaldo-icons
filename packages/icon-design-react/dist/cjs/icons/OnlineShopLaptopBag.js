'use strict';

const { createElement, forwardRef } = require('react');

const OnlineShopLaptopBag = forwardRef(function OnlineShopLaptopBag(
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
    createElement('rect', {"x":"3.050537117662316","y":"1.998782732995096","width":"18","height":"16","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"2.050537117662316","y1":"21.998782732995096","x2":"22.050537117662316","y2":"21.998782732995096","key":"1"}),
    createElement('rect', {"x":"7.050537117662316","y":"7.998782732995096","width":"10","height":"6","rx":"1","ry":"1","key":"2"}),
    createElement('path', {"d":"M14.050537117662316,8.998782732995096v-2.000002000000677c0-1.10456839509061-.895429604910532-1.999997999999323-1.999997999999323-1.999997999999323h-.000004000001354c-1.104568395088791,0-1.999997999999323.895429604908713-1.999997999999323,1.999997999999323v2.000002000000677","key":"3"})
  );
});

OnlineShopLaptopBag.displayName = 'OnlineShopLaptopBag';

module.exports = OnlineShopLaptopBag;
module.exports.OnlineShopLaptopBag = OnlineShopLaptopBag;
module.exports.default = OnlineShopLaptopBag;
