'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const EjectDownCircle = forwardRef(function EjectDownCircle(
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
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z","key":"0"}),
    createElement(Path, {"d":"M15.066 11.5L8.934 11.5C8.535 11.5 8.297 11.945 8.52 12.277L11.586 16.875C11.781 17.172 12.219 17.172 12.418 16.875L15.48 12.277C15.703 11.945 15.465 11.5 15.066 11.5Z","key":"1"}),
    createElement(Path, {"d":"M8.5 8L15.5 8","key":"2"})
  );
});

EjectDownCircle.displayName = 'EjectDownCircle';

module.exports = EjectDownCircle;
module.exports.EjectDownCircle = EjectDownCircle;
module.exports.default = EjectDownCircle;
