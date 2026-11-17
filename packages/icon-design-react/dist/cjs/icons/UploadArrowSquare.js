'use strict';

const { createElement, forwardRef } = require('react');

const UploadArrowSquare = forwardRef(function UploadArrowSquare(
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
    createElement('path', {"d":"M16.97473145002914,9.000000000462023h2c1.656854249489697,0,3,1.343145750503936,3,3v6.999999999997272c0,1.656854249493335-1.343145750510303,3-3,3H4.97473145002914c-1.656854249489697,0-3-1.343145750506665-3-3v-6.999999999997272c0-1.656854249496064,1.343145750510303-3,3-3h2","key":"0"}),
    createElement('polyline', {"points":"8.9747314502074 5.000000000191903 11.974731451149637 2.000000000462023 14.9747314502074 5.000000000730324","key":"1"}),
    createElement('line', {"x1":"11.974731448501188","y1":"12.000000000462023","x2":"11.974731451149637","y2":"2.000000000462023","key":"2"}),
    createElement('line', {"x1":"6.97473145002914","y1":"17.000000000462023","x2":"16.97473145002914","y2":"17.000000000462023","key":"3"})
  );
});

UploadArrowSquare.displayName = 'UploadArrowSquare';

module.exports = UploadArrowSquare;
module.exports.UploadArrowSquare = UploadArrowSquare;
module.exports.default = UploadArrowSquare;
