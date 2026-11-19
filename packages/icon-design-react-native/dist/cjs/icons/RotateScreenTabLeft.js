'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline, Rect } = RNSvg;

const RotateScreenTabLeft = forwardRef(function RotateScreenTabLeft(
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
    createElement(Rect, {"x":"1.974731413605696","y":"9.998779298541194","width":"20","height":"12","rx":"2","ry":"2","key":"0"}),
    createElement(Polyline, {"points":"14.974731413605696 5.998779298537556 18.974731413605696 5.998779298537556 18.974731413605696 1.998779298537556","key":"1"}),
    createElement(Path, {"d":"M18.895751921416377,5.998779298541194c-1.383911132810681-2.388916015625-3.961547851560681-4-6.921020507810681-4s-5.537109375,1.611083984375-6.921020507808862,4","key":"2"}),
    createElement(Polyline, {"points":"1.974731413605696 16.998779298537556 3.974731413605696 16.998779298541194 3.974731413605696 14.998779298541194 1.974731413605696 14.998779298537556","key":"3"})
  );
});

RotateScreenTabLeft.displayName = 'RotateScreenTabLeft';

module.exports = RotateScreenTabLeft;
module.exports.RotateScreenTabLeft = RotateScreenTabLeft;
module.exports.default = RotateScreenTabLeft;
