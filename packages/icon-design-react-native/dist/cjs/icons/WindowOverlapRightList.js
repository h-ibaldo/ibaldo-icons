'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const WindowOverlapRightList = forwardRef(function WindowOverlapRightList(
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
    createElement(Rect, {"x":"6.9999999935917","y":"1.998779299956368","width":"15","height":"15","rx":"2","ry":"2","key":"0"}),
    createElement(Path, {"d":"M6.999999993611709,6.998779299956368h-3.000000000020009c-1.104569499659192,0-2,.895430500338989-2,2v11c0,1.104569499661011.895430500340808,2,2,2h11.000000000020009c1.104569499661011,0,2-.895430500338989,2-2v-3","key":"1"}),
    createElement(Line, {"x1":"6.9999999935917","y1":"5.998779299956368","x2":"21.9999999935917","y2":"5.998779299956368","key":"2"}),
    createElement(Line, {"x1":"10.999999993611709","y1":"9.998779299956368","x2":"11.999999993611709","y2":"9.998779299956368","key":"3"}),
    createElement(Line, {"x1":"14.999999993611709","y1":"9.998779299956368","x2":"17.999999993611709","y2":"9.998779299956368","key":"4"}),
    createElement(Line, {"x1":"10.999999993611709","y1":"12.998779299956368","x2":"11.999999993611709","y2":"12.998779299956368","key":"5"}),
    createElement(Line, {"x1":"14.999999993611709","y1":"12.998779299956368","x2":"17.999999993611709","y2":"12.998779299956368","key":"6"}),
    createElement(Line, {"x1":"1.999999993611709","y1":"10.998779299956368","x2":"6.999999993611709","y2":"10.998779299956368","key":"7"})
  );
});

WindowOverlapRightList.displayName = 'WindowOverlapRightList';

module.exports = WindowOverlapRightList;
module.exports.WindowOverlapRightList = WindowOverlapRightList;
module.exports.default = WindowOverlapRightList;
