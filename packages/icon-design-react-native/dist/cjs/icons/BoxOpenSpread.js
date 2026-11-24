'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const BoxOpenSpread = forwardRef(function BoxOpenSpread(
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
    createElement(Polyline, {"points":"1.999999999909051 9.999999999998181 15.999999999909051 2.999999999998181 21.99999999991087 5.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"21.999999999909051 5.999999999998181 7.999999999909051 12.999999999998181 1.999999999907232 9.999999999998181","key":"1"}),
    createElement(Polyline, {"points":"21.999999999998181 9.999999999548891 7.999999999683496 3.000000000178261 1.999999999818101 6.000000000447471","key":"2"}),
    createElement(Polyline, {"points":"1.99999999981992 6.000000000447471 16.000000000132786 12.999999999818101 22 9.999999999548891","key":"3"}),
    createElement(Polyline, {"points":"5.999999999818101 11.999999999998181 5.999999999818101 17.999999999998181 11.999999999818101 20.999999999998181 17.999999999818101 17.999999999998181 17.999999999818101 11.999999999998181","key":"4"}),
    createElement(Line, {"x1":"11.99999999981992","y1":"10.999999999998181","x2":"11.99999999981992","y2":"20.999999999998181","key":"5"})
  );
});

BoxOpenSpread.displayName = 'BoxOpenSpread';

module.exports = BoxOpenSpread;
module.exports.BoxOpenSpread = BoxOpenSpread;
module.exports.default = BoxOpenSpread;
