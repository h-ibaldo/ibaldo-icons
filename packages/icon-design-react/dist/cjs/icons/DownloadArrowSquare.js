'use strict';

const { createElement, forwardRef } = require('react');

const DownloadArrowSquare = forwardRef(function DownloadArrowSquare(
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
    createElement('rect', {"x":"1.974731450037325","y":"2.000000000459295","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('polyline', {"points":"14.974731450037325 11.000000000462023 11.974731449364299 14.000000000462023 8.974731450037325 11.000000000462023","key":"1"}),
    createElement('line', {"x1":"11.974731451114167","y1":"6.000000000462023","x2":"11.974731449364299","y2":"14.000000000462023","key":"2"}),
    createElement('line', {"x1":"6.974731450037325","y1":"18.000000000462023","x2":"16.974731450037325","y2":"18.000000000462023","key":"3"})
  );
});

DownloadArrowSquare.displayName = 'DownloadArrowSquare';

module.exports = DownloadArrowSquare;
module.exports.DownloadArrowSquare = DownloadArrowSquare;
module.exports.default = DownloadArrowSquare;
