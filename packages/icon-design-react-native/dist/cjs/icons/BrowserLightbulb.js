'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BrowserLightbulb = forwardRef(function BrowserLightbulb(
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
    createElement(Path, {"d":"M5.999999993639904,21.998779299956368h-2c-1.104569499660101,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499664649.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500335351,2,2v16c0,1.104569499661011-.895430500339899,2-2,2h-2","key":"0"}),
    createElement(Line, {"x1":"1.999999993639904","y1":"7.998779299956368","x2":"21.999999993639904","y2":"7.998779299956368","key":"1"}),
    createElement(Path, {"d":"M9.999999993639904,18.444030764800118v1.140534972782916c0,.265216489839077.105356840370405.519570402739191.292893218810605.707106781184848l.707106781189395.707106781188486h2l.707106781190305-.707106781188486c.18753637843929-.187536378445657.292893218809695-.441890291345771.292893218809695-.707106781184848v-1.140534972782916","key":"2"}),
    createElement(Path, {"d":"M13.999999993639904,18.444030764800118c1.190612792969659-.69293212890625,2-1.96844482421875,2-3.44525146484375,0-2.20916748046875-1.790832519530341-4-4-4s-4,1.79083251953125-4,4c0,1.476806640625.809387207030341,2.7523193359375,2,3.44525146484375","key":"3"}),
    createElement(Line, {"x1":"10.999999993639904","y1":"21.998779299956368","x2":"12.999999993639904","y2":"21.998779299956368","key":"4"}),
    createElement(Line, {"x1":"4.98473144503987","y1":"4.923217770028714","x2":"4.974731445039652","y2":"4.923217770028714","key":"5"}),
    createElement(Line, {"x1":"7.98473144503987","y1":"4.923217770028714","x2":"7.974731445039652","y2":"4.923217770028714","key":"6"}),
    createElement(Line, {"x1":"18.974731445039652","y1":"4.923217770028714","x2":"10.974731445039652","y2":"4.923217770028714","key":"7"})
  );
});

BrowserLightbulb.displayName = 'BrowserLightbulb';

module.exports = BrowserLightbulb;
module.exports.BrowserLightbulb = BrowserLightbulb;
module.exports.default = BrowserLightbulb;
