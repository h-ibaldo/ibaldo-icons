'use strict';

const { createElement, forwardRef } = require('react');

const PageViewIconsThumbnails3 = forwardRef(function PageViewIconsThumbnails3(
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
    createElement('rect', {"x":"1.999999994000973","y":"1.998779299967282","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M9.999999994000973,5.998779299967282c-2.209138999201969,0-4,1.790861000798031-4,4","key":"1"}),
    createElement('line', {"x1":"5.009999993999372","y1":"5.00877929996841","x2":"4.999999994000973","y2":"4.998779299967282","key":"2"}),
    createElement('rect', {"x":"13.999999994000973","y":"1.998779299967282","width":"8","height":"8","rx":"1","ry":"1","key":"3"}),
    createElement('line', {"x1":"17.999999994000973","y1":"17.008779299956586","x2":"17.999999994000973","y2":"16.998779299956368","key":"4"}),
    createElement('line', {"x1":"17.999999994000973","y1":"19.998779299945454","x2":"17.999999994000973","y2":"21.998779299945454","key":"5"}),
    createElement('rect', {"x":"13.999999994000973","y":"13.998779299967282","width":"8","height":"8","rx":"1","ry":"1","key":"6"}),
    createElement('rect', {"x":"16.999999994000973","y":"4.998779299956368","width":"2","height":"2","key":"7"}),
    createElement('rect', {"x":"1.999999994000973","y":"13.998779299967282","width":"8","height":"8","rx":"1","ry":"1","key":"8"}),
    createElement('line', {"x1":"4.989999994000755","y1":"14.998779299967282","x2":"4.999999994000973","y2":"14.998779299967282","key":"9"}),
    createElement('line', {"x1":"2.989999994000755","y1":"16.998779299967282","x2":"2.999999994000973","y2":"16.998779299967282","key":"10"}),
    createElement('line', {"x1":"5.989999994000755","y1":"16.998779299967282","x2":"5.999999994000973","y2":"16.998779299967282","key":"11"}),
    createElement('line', {"x1":"8.989999994000755","y1":"16.998779299967282","x2":"8.999999994000973","y2":"16.998779299967282","key":"12"}),
    createElement('line', {"x1":"8.989999994000755","y1":"20.998779299967282","x2":"8.999999994000973","y2":"20.998779299967282","key":"13"}),
    createElement('line', {"x1":"7.989999994000755","y1":"14.998779299967282","x2":"7.999999994000973","y2":"14.998779299967282","key":"14"}),
    createElement('line', {"x1":"2.989999994000755","y1":"20.998779299967282","x2":"2.999999994000973","y2":"20.998779299967282","key":"15"}),
    createElement('line', {"x1":"5.989999994000755","y1":"20.998779299967282","x2":"5.999999994000973","y2":"20.998779299967282","key":"16"}),
    createElement('line', {"x1":"4.989999994000755","y1":"18.998779299967282","x2":"4.999999994000973","y2":"18.998779299967282","key":"17"}),
    createElement('line', {"x1":"7.989999994000755","y1":"18.998779299967282","x2":"7.999999994000973","y2":"18.998779299967282","key":"18"})
  );
});

PageViewIconsThumbnails3.displayName = 'PageViewIconsThumbnails3';

module.exports = PageViewIconsThumbnails3;
module.exports.PageViewIconsThumbnails3 = PageViewIconsThumbnails3;
module.exports.default = PageViewIconsThumbnails3;
