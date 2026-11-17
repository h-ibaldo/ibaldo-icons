'use strict';

const { createElement, forwardRef } = require('react');

const VoteArrows = forwardRef(function VoteArrows(
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
    createElement('line', {"x1":"12.016630450972116","y1":"2.000000000480213","x2":"12.016630450972116","y2":"9.000000000480213","key":"0"}),
    createElement('polyline', {"points":"8.016630450972116 6.000000000480213 12.016630450972116 2.000000000480213 16.016630450972116 6.000000000480213","key":"1"}),
    createElement('line', {"x1":"12.016630450972116","y1":"22.000000000480213","x2":"12.016630450972116","y2":"15.000000000480213","key":"2"}),
    createElement('polyline', {"points":"16.016630450972116 18.000000000480213 12.016630450972116 22.000000000480213 8.016630450972116 18.000000000480213","key":"3"})
  );
});

VoteArrows.displayName = 'VoteArrows';

module.exports = VoteArrows;
module.exports.VoteArrows = VoteArrows;
module.exports.default = VoteArrows;
