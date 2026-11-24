'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Plug = forwardRef(function Plug(
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
    createElement(Path, {"d":"M6 8L18 8L18 12C18 14.762 15.762 17 13 17L11 17C8.238 17 6 14.762 6 12Z","key":"0"}),
    createElement(Path, {"d":"M12 17L12 21","key":"1"}),
    createElement(Path, {"d":"M15 3L15 8","key":"2"}),
    createElement(Path, {"d":"M9 3L9 8","key":"3"})
  );
});

Plug.displayName = 'Plug';

module.exports = Plug;
module.exports.Plug = Plug;
module.exports.default = Plug;
