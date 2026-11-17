'use strict';

const { createElement, forwardRef } = require('react');

const BoxLid = forwardRef(function BoxLid(
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
    createElement('rect', {"x":"2","y":"2.999999999998181","width":"20","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M21,7.999999999998181v12c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V7.999999999998181","key":"1"}),
    createElement('line', {"x1":"9","y1":"12.999999999998181","x2":"15","y2":"12.999999999998181","key":"2"})
  );
});

BoxLid.displayName = 'BoxLid';

module.exports = BoxLid;
module.exports.BoxLid = BoxLid;
module.exports.default = BoxLid;
