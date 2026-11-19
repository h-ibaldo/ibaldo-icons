'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const ArrowClockwiseCheckCircle = forwardRef(function ArrowClockwiseCheckCircle(
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
    createElement(Polyline, {"points":"19.000000000029104 1.999999999979991 19.000000000029104 5.999999999979991 15.000000000029104 5.999999999979991","key":"0"}),
    createElement(Polyline, {"points":"14.000000000029104 15.999999999979991 15.500000000029104 17.499999999979991 18.000000000029104 14.999999999979991","key":"1"}),
    createElement(Circle, {"cx":"16.000000000029104","cy":"15.999999999979991","r":"6","key":"2"}),
    createElement(Path, {"d":"M19.000000000029104,5.999999999979991v-.31646728515625c-1.738037109378638-2.23779296875-4.447204589849207-3.68353271484375-7.5-3.68353271484375C6.253295898470242,1.999999999979991,2.000000000029104,6.253295898417491,2.000000000029104,11.499999999979991s4.253295898441138,9.5,9.5,9.5c.365905761720569,0,.722900390621362-.0347900390625,1.078002929691138-.0750732421875","key":"3"})
  );
});

ArrowClockwiseCheckCircle.displayName = 'ArrowClockwiseCheckCircle';

module.exports = ArrowClockwiseCheckCircle;
module.exports.ArrowClockwiseCheckCircle = ArrowClockwiseCheckCircle;
module.exports.default = ArrowClockwiseCheckCircle;
