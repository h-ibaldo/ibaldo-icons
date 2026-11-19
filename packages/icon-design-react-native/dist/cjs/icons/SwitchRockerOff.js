'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const SwitchRockerOff = forwardRef(function SwitchRockerOff(
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
    createElement(Rect, {"x":"4.999999977100742","y":"4.999996563434252","width":"14","height":"17","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"16.999999977100742","y1":"3.999996563434252","x2":"16.999999977100742","y2":"3.999996563434252","key":"1"}),
    createElement(Line, {"x1":"14.999999977100742","y1":"2.999996563434252","x2":"14.999999977100742","y2":"2.999996563434252","key":"2"}),
    createElement(Line, {"x1":"12.999999977100742","y1":"3.999996563434252","x2":"12.999999977100742","y2":"3.999996563434252","key":"3"}),
    createElement(Line, {"x1":"10.999999977100742","y1":"2.999996563434252","x2":"10.999999977100742","y2":"2.999996563434252","key":"4"}),
    createElement(Line, {"x1":"8.999999977100742","y1":"3.999996563434252","x2":"8.999999977100742","y2":"3.999996563434252","key":"5"}),
    createElement(Line, {"x1":"6.999999977100742","y1":"2.999996563434252","x2":"6.999999977100742","y2":"2.999996563434252","key":"6"}),
    createElement(Line, {"x1":"11.999999977100742","y1":"10.999996563434252","x2":"11.999999977100742","y2":"7.999996563434252","key":"7"}),
    createElement(Rect, {"x":"9.999999944273213","y":"14.999996566816378","width":"4.000000065654149","height":"3.999999993235747","rx":"1.999998041590719","ry":"1.999998041590719","key":"8"}),
    createElement(Path, {"d":"M18.999999977089828,6.999996563434252v-3c0-1.104569499661011-.895430500329894-2-2-2H6.999999977089828c-1.104569499659192,0-2,.895430500338989-2,2v3","key":"9"})
  );
});

SwitchRockerOff.displayName = 'SwitchRockerOff';

module.exports = SwitchRockerOff;
module.exports.SwitchRockerOff = SwitchRockerOff;
module.exports.default = SwitchRockerOff;
