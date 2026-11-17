'use strict';

const { createElement, forwardRef } = require('react');

const DownloadArrowSquare2 = forwardRef(function DownloadArrowSquare2(
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
    createElement('rect', {"x":"1.974731450026411","y":"2.000000000459295","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('polyline', {"points":"8.974731450026411 9.000000000462023 11.974731450699437 6.000000000462023 14.974731450026411 9.000000000462023","key":"1"}),
    createElement('line', {"x1":"11.974731448949569","y1":"14.000000000462023","x2":"11.974731450699437","y2":"6.000000000462023","key":"2"}),
    createElement('line', {"x1":"6.974731450026411","y1":"18.000000000462023","x2":"16.974731450026411","y2":"18.000000000462023","key":"3"})
  );
});

DownloadArrowSquare2.displayName = 'DownloadArrowSquare2';

module.exports = DownloadArrowSquare2;
module.exports.DownloadArrowSquare2 = DownloadArrowSquare2;
module.exports.default = DownloadArrowSquare2;
