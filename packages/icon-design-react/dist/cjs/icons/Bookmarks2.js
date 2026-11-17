'use strict';

const { createElement, forwardRef } = require('react');

const Bookmarks2 = forwardRef(function Bookmarks2(
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
    createElement('path', {"d":"M15.000000026699126,5.999999999998181H5.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement('path', {"d":"M20.000000026699126,17.999999999998181V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3h-9","key":"1"})
  );
});

Bookmarks2.displayName = 'Bookmarks2';

module.exports = Bookmarks2;
module.exports.Bookmarks2 = Bookmarks2;
module.exports.default = Bookmarks2;
