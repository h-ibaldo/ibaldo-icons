'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const ClockAlertCircle = forwardRef(function ClockAlertCircle(
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
    createElement(Polyline, {"points":"15 5.999999999887223 15 8.999999999887223 18 8.999999999887223","key":"0"}),
    createElement(Line, {"x1":"7.999998926759872","y1":"13.999999999887223","x2":"8.000000004849426","y2":"14.999999999887223","key":"1"}),
    createElement(Line, {"x1":"7.999998926759872","y1":"17.989999999887004","x2":"8.000000004849426","y2":"17.999999999887223","key":"2"}),
    createElement(Circle, {"cx":"8.000000002427441","cy":"16.000000002315119","r":"5.99999999757506","key":"3"}),
    createElement(Path, {"d":"M13.995971679689319,15.919860839727335c.328735351560681.04736328125.662170410150793.080139160159888,1.004028320310681.080139160159888,3.865966796880457,0,7-3.134033203128638,7-7,0-3.866027832029431-3.134033203119543-7-7-7-3.865966796869543,0-7,3.133972167970569-7,7,0,.341857910159888.032775878909888.67529296875.080139160159888,1.004028320310681","key":"4"})
  );
});

ClockAlertCircle.displayName = 'ClockAlertCircle';

module.exports = ClockAlertCircle;
module.exports.ClockAlertCircle = ClockAlertCircle;
module.exports.default = ClockAlertCircle;
