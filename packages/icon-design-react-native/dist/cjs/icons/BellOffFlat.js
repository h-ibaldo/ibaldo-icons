'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BellOffFlat = forwardRef(function BellOffFlat(
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
    createElement(Path, {"d":"M14.000000004471076,17.000000003885361v2.000002000001587c0,1.1045683950897-.895429604921446,1.999997999998413-1.999998000010237,1.999997999998413h-.000004000001354c-1.10456839509061,0-1.999997999988409-.895429604908713-1.999997999988409-1.999997999998413v-2.000002000001587","key":"0"}),
    createElement(Line, {"x1":"20.000000004471076","y1":"17.000000003885361","x2":"7.000000004471076","y2":"17.000000003885361","key":"1"}),
    createElement(Line, {"x1":"12.000000004471076","y1":"2.000000003886271","x2":"12.000000004471076","y2":"4.000000003886271","key":"2"}),
    createElement(Line, {"x1":"20.000000004471076","y1":"3.000000003886271","x2":"4.000000004471076","y2":"20.000000003885361","key":"3"}),
    createElement(Path, {"d":"M13.887146000559369,4.307373050766728c-.59393310546875-.19677734375-1.227172851569776-.307373046880457-1.887145996088293-.307373046880457-3.313720703130457,0-6,2.686279296881366-6,5.999999999999091v2.6875","key":"4"}),
    createElement(Path, {"d":"M18.000000004471076,17.000000003885361v-7c0-1.3504638671875-.451538085952052-2.592529296867724-1.204528808590112-3.595214843749091","key":"5"})
  );
});

BellOffFlat.displayName = 'BellOffFlat';

module.exports = BellOffFlat;
module.exports.BellOffFlat = BellOffFlat;
module.exports.default = BellOffFlat;
