'use strict';

const { createElement, forwardRef } = require('react');

const Bookmark2Plus = forwardRef(function Bookmark2Plus(
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
    createElement('path', {"d":"M21,1.999999999998181H7c-1.656854249493335,0-3,1.343145750509393-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999996999998984c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z","key":"0"}),
    createElement('line', {"x1":"8.000000010779331","y1":"9.999999995146936","x2":"14.000000010779331","y2":"9.999999995146936","key":"1"}),
    createElement('line', {"x1":"11.000000010779331","y1":"6.999999995146936","x2":"11.000000010779331","y2":"12.999999995146936","key":"2"})
  );
});

Bookmark2Plus.displayName = 'Bookmark2Plus';

module.exports = Bookmark2Plus;
module.exports.Bookmark2Plus = Bookmark2Plus;
module.exports.default = Bookmark2Plus;
