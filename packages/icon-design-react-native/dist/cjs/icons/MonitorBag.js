'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const MonitorBag = forwardRef(function MonitorBag(
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
    createElement(Rect, {"x":"1.999999993642632","y":"2.998779300212846","width":"20","height":"14","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"5.999999993642632","y1":"20.998779300212846","x2":"17.999999993642632","y2":"20.998779300212846","key":"1"}),
    createElement(Line, {"x1":"11.999999993642632","y1":"16.998779300212846","x2":"11.999999993642632","y2":"20.998779300212846","key":"2"}),
    createElement(Rect, {"x":"6.999999993642632","y":"8.998779300212846","width":"10","height":"5.000000000003638","rx":".912870929176279","ry":".912870929176279","key":"3"}),
    createElement(Path, {"d":"M13.999999993642632,8.998779300212846v-1.000002000000677c0-1.10456839509061-.895429604910532-1.999997999999323-1.999998000002051-1.999997999999323h-.000003999998626c-1.104568395088791,0-1.999997999999323.895429604908713-1.999997999999323,1.999997999999323v1.000002000000677","key":"4"})
  );
});

MonitorBag.displayName = 'MonitorBag';

module.exports = MonitorBag;
module.exports.MonitorBag = MonitorBag;
module.exports.default = MonitorBag;
