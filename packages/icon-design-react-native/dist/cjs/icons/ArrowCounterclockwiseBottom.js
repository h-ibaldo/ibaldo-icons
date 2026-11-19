'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const ArrowCounterclockwiseBottom = forwardRef(function ArrowCounterclockwiseBottom(
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
    createElement(Polyline, {"points":"20.0000000004502 21.999999999959982 20.000000000130058 17.99999999963984 15.99999999981992 17.999999999959982","key":"0"}),
    createElement(Path, {"d":"M21.949523925819449,12.999999999548891c.032653808581017-.328979492180224.050476074190556-.662414550779431.050476074180551-1-.000000000250111-5.522827148430224-4.477172852019976-9.999999999799911-10.0000000004502-9.999999999548891-5.522827148440228.000000000249202-9.999999999799911,4.477172852009971-9.9999999995498,10.00000000044929.000000000240107,5.522827148439319,4.477172852009971,9.999999999799911,10.0000000004502,9.99999999955071,3.268432617179315-.000000000150976,6.161621093669964-1.575195312771029,7.986389159969804-4.00000000036016","key":"1"})
  );
});

ArrowCounterclockwiseBottom.displayName = 'ArrowCounterclockwiseBottom';

module.exports = ArrowCounterclockwiseBottom;
module.exports.ArrowCounterclockwiseBottom = ArrowCounterclockwiseBottom;
module.exports.default = ArrowCounterclockwiseBottom;
