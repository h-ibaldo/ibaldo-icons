'use strict';

const { createElement, forwardRef } = require('react');

const UploadTraySquare = forwardRef(function UploadTraySquare(
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
    createElement('path', {"d":"M14.974731450030959,17.000000000459295h0c0,.552284749832324-.447715250180408,1-1,1h-4c-.552284749841419,0-1-.447715250167676-1-1h0c0-.552284749828686-.447715250180408-1-1-1H1.974731450030959v4c0,1.104569499661011.895430500328075,2,2,2h16c1.104569499648278,0,2-.895430500338989,2-2v-4h-6c-.552284749841419,0-1,.447715250171314-1,1Z","key":"0"}),
    createElement('path', {"d":"M1.974731450030959,16.000000000459295V4.000000000459295c0-1.104569499661011.895430500328075-2,2-2h16c1.104569499648278,0,2,.895430500338989,2,2v12","key":"1"}),
    createElement('polyline', {"points":"8.974731440010146 10.000000008233656 11.974731440010146 7.000000008233656 14.974731440010146 10.000000008233656","key":"2"}),
    createElement('line', {"x1":"11.974731440010146","y1":"13.000000008233656","x2":"11.974731440010146","y2":"7.000000008233656","key":"3"})
  );
});

UploadTraySquare.displayName = 'UploadTraySquare';

module.exports = UploadTraySquare;
module.exports.UploadTraySquare = UploadTraySquare;
module.exports.default = UploadTraySquare;
