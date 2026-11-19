'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NodesTriangleUpright = forwardRef(function NodesTriangleUpright(
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
    createElement(Path, {"d":"M15 6C15 7.656 13.656 9 12 9C10.344 9 9 7.656 9 6C9 4.344 10.344 3 12 3C13.656 3 15 4.344 15 6Z","key":"0"}),
    createElement(Path, {"d":"M22 17C22 18.656 20.656 20 19 20C17.344 20 16 18.656 16 17C16 15.344 17.344 14 19 14C20.656 14 22 15.344 22 17Z","key":"1"}),
    createElement(Path, {"d":"M8 17C8 18.656 6.656 20 5 20C3.344 20 2 18.656 2 17C2 15.344 3.344 14 5 14C6.656 14 8 15.344 8 17Z","key":"2"}),
    createElement(Path, {"d":"M17.395 14.473L13.609 8.527","key":"3"}),
    createElement(Path, {"d":"M8 17L16 17","key":"4"}),
    createElement(Path, {"d":"M10.395 8.527L6.609 14.473","key":"5"})
  );
});

NodesTriangleUpright.displayName = 'NodesTriangleUpright';

module.exports = NodesTriangleUpright;
module.exports.NodesTriangleUpright = NodesTriangleUpright;
module.exports.default = NodesTriangleUpright;
