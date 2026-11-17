'use strict';

const { createElement, forwardRef } = require('react');

const WindowTextXCircle = forwardRef(function WindowTextXCircle(
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
    createElement('path', {"d":"M9.999999994000973,21.998779299967282H3.999999994000973c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299967282c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v6","key":"0"}),
    createElement('line', {"x1":"1.999999994000973","y1":"7.998779299967282","x2":"21.999999994000973","y2":"7.998779299967282","key":"1"}),
    createElement('line', {"x1":"17.999999998859494","y1":"14.998779299963644","x2":"14.999999998859494","y2":"17.998779299963644","key":"2"}),
    createElement('line', {"x1":"14.99999999891952","y1":"14.998779299895432","x2":"17.999999998790372","y2":"17.998779300029128","key":"3"}),
    createElement('circle', {"cx":"16.499999994010068","cy":"16.498779299964554","r":"5.499999999998636","key":"4"}),
    createElement('line', {"x1":"6.999999994000973","y1":"16.998779299956368","x2":"11.025207513530404","y2":"16.998779299956368","key":"5"}),
    createElement('line', {"x1":"12.257324212750973","y1":"12.998779299956368","x2":"6.999999994000973","y2":"12.998779299956368","key":"6"}),
    createElement('line', {"x1":"5.010000004900576","y1":"4.999999995256076","x2":"5.000000004900357","y2":"4.999999995256076","key":"7"}),
    createElement('line', {"x1":"8.010000004900576","y1":"4.999999995256076","x2":"8.000000004900357","y2":"4.999999995256076","key":"8"}),
    createElement('line', {"x1":"11.010000004900576","y1":"4.999999995256076","x2":"11.000000004900357","y2":"4.999999995256076","key":"9"})
  );
});

WindowTextXCircle.displayName = 'WindowTextXCircle';

module.exports = WindowTextXCircle;
module.exports.WindowTextXCircle = WindowTextXCircle;
module.exports.default = WindowTextXCircle;
