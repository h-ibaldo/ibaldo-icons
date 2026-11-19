'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const CloudArrowDown = forwardRef(function CloudArrowDown(
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
    createElement(Path, {"d":"M17.5,14.999999999718057h-.5v-1c0-2.761413574229664-2.238586425780341-5-5-5-2.065612792969659,0-3.83740234375,1.253295898439319-4.599792480469659,3.040344238270336-.134338378910797-.01080322263897-.263122558600116-.040344238270336-.400207519530341-.040344238270336-2.761413574219659,0-5,2.238586425770336-5,5,0,2.761413574209655,2.238586425780341,5,5,5h10.5c1.932983398430224,0,3.5-1.567016601560681,3.5-3.5,0-1.932983398430224-1.567016601569776-3.5-3.5-3.5Z","key":"0"}),
    createElement(Polyline, {"points":"22 4.999999999718057 19 7.999999999718057 16 4.999999999718057","key":"1"}),
    createElement(Line, {"x1":"19","y1":"1.999999999718057","x2":"19","y2":"7.999999999718057","key":"2"})
  );
});

CloudArrowDown.displayName = 'CloudArrowDown';

module.exports = CloudArrowDown;
module.exports.CloudArrowDown = CloudArrowDown;
module.exports.default = CloudArrowDown;
