'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ChecklistSquareFilledTop = forwardRef(function ChecklistSquareFilledTop(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Line, {"x1":"11.000000000224645","y1":"4.032754075946286","x2":"22.000000000224645","y2":"4.032754075946286","key":"0"}),
    createElement(Line, {"x1":"11.000000000224645","y1":"12.032754075946286","x2":"22.000000000224645","y2":"12.032754075946286","key":"1"}),
    createElement(Line, {"x1":"11.000000000224645","y1":"20.032754075946286","x2":"22.000000000224645","y2":"20.032754075946286","key":"2"}),
    createElement(Rect, {"x":"2.000000000224645","y":"10.032754075946286","width":"4","height":"4","key":"3"}),
    createElement(Rect, {"x":"2.000000000224645","y":"2.032754075946286","width":"4","height":"4","key":"4"}),
    createElement(Rect, {"x":"2.000000000224645","y":"18.032754075946286","width":"4","height":"4","key":"5"}),
    createElement(Line, {"x1":"3.000000000224645","y1":"3.032754075946286","x2":"5.000000000224645","y2":"5.032754075946286","key":"6"}),
    createElement(Line, {"x1":"3.000000000172804","y1":"5.032754075895355","x2":"5.000000000275577","y2":"3.032754075997218","key":"7"})
  );
});

ChecklistSquareFilledTop.displayName = 'ChecklistSquareFilledTop';

module.exports = ChecklistSquareFilledTop;
module.exports.ChecklistSquareFilledTop = ChecklistSquareFilledTop;
module.exports.default = ChecklistSquareFilledTop;
