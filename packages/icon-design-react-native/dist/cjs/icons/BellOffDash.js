'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BellOffDash = forwardRef(function BellOffDash(
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
    createElement(Line, {"x1":"20.000000021749656","y1":"17.000000004136382","x2":"7.000000021749656","y2":"17.000000004136382","key":"0"}),
    createElement(Line, {"x1":"10.000000021749656","y1":"21.000000004136382","x2":"14.000000021749656","y2":"21.000000004136382","key":"1"}),
    createElement(Line, {"x1":"20.000000021749656","y1":"3.000000004136382","x2":"4.000000021749656","y2":"20.000000004136382","key":"2"}),
    createElement(Path, {"d":"M18.000000021749656,17.000000004136382v-8c0-1.098022460941138-.2998046875-2.123901367191138-.814819335930224-3.00927734375","key":"3"}),
    createElement(Path, {"d":"M14.608764670188975,3.603149418196153c-.789733886709655-.382446289059772-1.672424316409888-.603149414059772-2.608764648439319-.603149414059772-3.313720703108629,0-6,2.686279296879547-6,6v3.75","key":"4"})
  );
});

BellOffDash.displayName = 'BellOffDash';

module.exports = BellOffDash;
module.exports.BellOffDash = BellOffDash;
module.exports.default = BellOffDash;
