'use strict';

const { createElement, forwardRef } = require('react');

const Bookmark2Check = forwardRef(function Bookmark2Check(
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
    createElement('polyline', {"points":"8.000000037482096 10.999999995146936 10.000000037482096 12.999999995146936 14.000000037482096 7.999999995146936","key":"1"})
  );
});

Bookmark2Check.displayName = 'Bookmark2Check';

module.exports = Bookmark2Check;
module.exports.Bookmark2Check = Bookmark2Check;
module.exports.default = Bookmark2Check;
