'use strict';

const { createElement, forwardRef } = require('react');

const Browser = forwardRef(function Browser(
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
    createElement('rect', {"x":"1.99999999963984","y":"1.999999996951374","width":"20","height":"20","rx":"1.999999999997272","ry":"1.999999999997272","key":"0"}),
    createElement('line', {"x1":"21.99999999981992","y1":"7.999999997398845","x2":"1.99999999981992","y2":"7.999999996503902","key":"1"}),
    createElement('line', {"x1":"8.009999999640058","y1":"4.99999999726424","x2":"7.99999999963984","y2":"4.99999999726424","key":"2"}),
    createElement('line', {"x1":"18.99999999963984","y1":"4.99999999726424","x2":"10.99999999963984","y2":"4.99999999726424","key":"3"}),
    createElement('line', {"x1":"5.009999999640058","y1":"4.999999997129635","x2":"4.99999999963984","y2":"4.999999997129635","key":"4"})
  );
});

Browser.displayName = 'Browser';

module.exports = Browser;
module.exports.Browser = Browser;
module.exports.default = Browser;
