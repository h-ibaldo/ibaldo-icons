'use strict';

const { createElement, forwardRef } = require('react');

const UpvotePlusMinus = forwardRef(function UpvotePlusMinus(
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
    createElement('line', {"x1":"11.516630450973935","y1":"4.000000000480213","x2":"11.516630450973935","y2":"13.000000000476575","key":"0"}),
    createElement('line', {"x1":"16.016630450973935","y1":"8.500000000476575","x2":"7.016630450973935","y2":"8.500000000476575","key":"1"}),
    createElement('line', {"x1":"16.016630450973935","y1":"19.500000000476575","x2":"7.016630450973935","y2":"19.500000000476575","key":"2"})
  );
});

UpvotePlusMinus.displayName = 'UpvotePlusMinus';

module.exports = UpvotePlusMinus;
module.exports.UpvotePlusMinus = UpvotePlusMinus;
module.exports.default = UpvotePlusMinus;
