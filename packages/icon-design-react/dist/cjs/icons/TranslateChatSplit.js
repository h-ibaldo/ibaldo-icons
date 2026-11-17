'use strict';

const { createElement, forwardRef } = require('react');

const TranslateChatSplit = forwardRef(function TranslateChatSplit(
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
    createElement('polyline', {"points":"10.025268548975873 21.997565476121054 22.025268548975873 21.997565476121054 22.025268548975873 2.997565476121054 18.025268548975873 6.997565476121054 14.025268548975873 6.997565476121054","key":"0"}),
    createElement('polyline', {"points":"14.025268548975873 1.997565476121054 2.025268548975873 1.997565476121054 2.025268548975873 20.997565476121054 6.025268548975873 16.997565476121054 10.025268548975873 16.997565476121054","key":"1"}),
    createElement('path', {"d":"M17.025268548975873,13.997565476117416c-2,1-3,2.000000000003638-3,3.000000000003638,0,2,2,2,4,2","key":"2"}),
    createElement('path', {"d":"M17.025268548975873,10.997565476121054c-1.236875890319425-.590576526228688-1.999996185319105.375003337860107-2,1-.000003814709999.625001430500561.147852331750983,1.147852331781905,2,2","key":"3"}),
    createElement('polyline', {"points":"5.025268548975873 12.997565476121054 8.025268548975873 4.997565476121054 11.025268548975873 12.997565476121054","key":"4"}),
    createElement('line', {"x1":"6.025268548975873","y1":"10.997565476121054","x2":"10.025268548975873","y2":"10.997565476121054","key":"5"})
  );
});

TranslateChatSplit.displayName = 'TranslateChatSplit';

module.exports = TranslateChatSplit;
module.exports.TranslateChatSplit = TranslateChatSplit;
module.exports.default = TranslateChatSplit;
