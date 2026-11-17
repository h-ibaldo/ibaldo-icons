'use strict';

const { createElement, forwardRef } = require('react');

const AssistiveTechnologyWheelchairSquare3 = forwardRef(function AssistiveTechnologyWheelchairSquare3(
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
    createElement('rect', {"x":"2.025268548975873","y":"1.997565476117416","width":"20","height":"20.000000000003638","rx":"1.999999999999636","ry":"1.999999999999636","key":"0"}),
    createElement('circle', {"cx":"10.025268548975873","cy":"6.997565476121054","r":"1","key":"1"}),
    createElement('circle', {"cx":"10.525268548975873","cy":"14.497565476121054","r":"3.5","key":"2"}),
    createElement('polyline', {"points":"13.675659173975873 12.997565476121054 16.025268548975873 12.997565476121054 18.025268548975873 16.997565476121054","key":"3"}),
    createElement('line', {"x1":"10.025268548975873","y1":"6.997565476121054","x2":"10.694702142725873","y2":"11.014655319871054","key":"4"}),
    createElement('line', {"x1":"11.025268548975873","y1":"9.997565476121054","x2":"14.025268548975873","y2":"9.997565476121054","key":"5"})
  );
});

AssistiveTechnologyWheelchairSquare3.displayName = 'AssistiveTechnologyWheelchairSquare3';

module.exports = AssistiveTechnologyWheelchairSquare3;
module.exports.AssistiveTechnologyWheelchairSquare3 = AssistiveTechnologyWheelchairSquare3;
module.exports.default = AssistiveTechnologyWheelchairSquare3;
