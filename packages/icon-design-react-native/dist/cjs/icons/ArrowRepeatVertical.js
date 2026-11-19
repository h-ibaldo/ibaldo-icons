'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const ArrowRepeatVertical = forwardRef(function ArrowRepeatVertical(
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
    createElement(Polyline, {"points":"22 16.999999999552529 19.000000000130058 19.999999999690772 16 16.999999999821739","key":"0"}),
    createElement(Path, {"d":"M8.999999999859938,2.000000000662112l2.99999999963984-.000000000040018c3.865993248819905-.000000000170985,7.000000000140062,3.134006750868139,7.000000000320142,6.999999999688953l.000000000310138,10.999999999379725","key":"1"}),
    createElement(Polyline, {"points":"1.99999999972988 7.000000001071385 4.999999999589818 4.000000000931323 7.99999999972988 7.000000000800355","key":"2"}),
    createElement(Path, {"d":"M14.999999999859938,21.999999999950887l-2.99999999963984.000000000049113c-3.865993248819905.000000000170985-7.000000000140062-3.134006750868139-7.000000000310138-6.999999999688953l-.000000000320142-10.999999999379725","key":"3"})
  );
});

ArrowRepeatVertical.displayName = 'ArrowRepeatVertical';

module.exports = ArrowRepeatVertical;
module.exports.ArrowRepeatVertical = ArrowRepeatVertical;
module.exports.default = ArrowRepeatVertical;
