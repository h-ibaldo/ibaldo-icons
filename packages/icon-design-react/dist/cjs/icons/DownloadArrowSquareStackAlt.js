'use strict';

const { createElement, forwardRef } = require('react');

const DownloadArrowSquareStackAlt = forwardRef(function DownloadArrowSquareStackAlt(
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
    createElement('rect', {"x":"2.974731450026411","y":"6.000000000462023","width":"14","height":"15.999999999997272","rx":"3","ry":"3","key":"0"}),
    createElement('path', {"d":"M6.974731450026411,2.000000000462023h11c1.656854249493335,0,3,1.343145750503936,3,3v13","key":"1"}),
    createElement('polyline', {"points":"12.974731450026411 15.000000000462023 9.974731449353385 18.000000000462023 6.974731450026411 15.000000000462023","key":"2"}),
    createElement('line', {"x1":"9.974731451103253","y1":"10.000000000462023","x2":"9.974731449353385","y2":"18.000000000462023","key":"3"})
  );
});

DownloadArrowSquareStackAlt.displayName = 'DownloadArrowSquareStackAlt';

module.exports = DownloadArrowSquareStackAlt;
module.exports.DownloadArrowSquareStackAlt = DownloadArrowSquareStackAlt;
module.exports.default = DownloadArrowSquareStackAlt;
