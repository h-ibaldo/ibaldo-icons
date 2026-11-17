'use strict';

const { createElement, forwardRef } = require('react');

const PageViewNewTabArrowDown3 = forwardRef(function PageViewNewTabArrowDown3(
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
    createElement('polyline', {"points":"11.999999993611709 21.998779299956368 1.999999993611709 21.998779299956368 1.999999993611709 1.998779299956368 9.999999993611709 1.998779299956368 12.999999993611709 5.998779299956368 21.999999993611709 5.998779299956368 21.999999993611709 11.998779299956368","key":"0"}),
    createElement('polyline', {"points":"14.999999993611709 1.998779299956368 21.999999993611709 1.998779299956368 21.999999993611709 5.998779299956368","key":"1"}),
    createElement('polyline', {"points":"21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368","key":"2"}),
    createElement('line', {"x1":"18.999999993611709","y1":"14.998779299956368","x2":"18.999999993611709","y2":"21.998779299956368","key":"3"})
  );
});

PageViewNewTabArrowDown3.displayName = 'PageViewNewTabArrowDown3';

module.exports = PageViewNewTabArrowDown3;
module.exports.PageViewNewTabArrowDown3 = PageViewNewTabArrowDown3;
module.exports.default = PageViewNewTabArrowDown3;
