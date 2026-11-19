'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const HouseDoorEaves = forwardRef(function HouseDoorEaves(
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
    createElement(Path, {"d":"M21.787135120239327,13.000000000842192L13.553536993700618,4.017901874094605c-.831365098711103-.906942843332217-2.261178365921296-.906942843332217-3.09254346463058,0L2.227395402520415,13.000000000842192","key":"0"}),
    createElement(Polyline, {"points":"5.00000000018008 14.000000000842192 5.007263183770192 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 15.000000000842192 14.00000000018008 15.000000000842192 14.00000000018008 21.000000000842192 19.007263183770192 21.000000000842192 19.00000000018008 14.000000000842192","key":"1"})
  );
});

HouseDoorEaves.displayName = 'HouseDoorEaves';

module.exports = HouseDoorEaves;
module.exports.HouseDoorEaves = HouseDoorEaves;
module.exports.default = HouseDoorEaves;
