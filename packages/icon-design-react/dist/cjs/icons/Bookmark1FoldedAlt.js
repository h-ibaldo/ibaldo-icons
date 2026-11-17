'use strict';

const { createElement, forwardRef } = require('react');

const Bookmark1FoldedAlt = forwardRef(function Bookmark1FoldedAlt(
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
    createElement('path', {"d":"M5.000000026699126,1.999999999998181h13c2.209138999320203,0,4,1.790861000679797,4,4v11l-7-4-7,4V4.999999999998181","key":"0"}),
    createElement('path', {"d":"M2.000000026699126,4.999999999998181c0-1.656854249400567,1.343145750601252-3,3-3,1.656854249400567,0,3,1.343145750599433,3,3","key":"1"}),
    createElement('polyline', {"points":"2.000000026699126 4.999999999998181 2.000000026699126 21.999999999998181 16.000000026699126 21.999999999998181 16.000000026699126 13.571411132808862","key":"2"})
  );
});

Bookmark1FoldedAlt.displayName = 'Bookmark1FoldedAlt';

module.exports = Bookmark1FoldedAlt;
module.exports.Bookmark1FoldedAlt = Bookmark1FoldedAlt;
module.exports.default = Bookmark1FoldedAlt;
