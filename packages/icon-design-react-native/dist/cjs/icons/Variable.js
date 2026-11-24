'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Variable = forwardRef(function Variable(
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
    createElement(Path, {"d":"M6 21.168C3.645 19.625 2 16.102 2 12C2 7.898 3.645 4.375 6 2.832","key":"0"}),
    createElement(Path, {"d":"M18 21.168C20.355 19.625 22 16.102 22 12C22 7.898 20.355 4.375 18 2.832","key":"1"}),
    createElement(Path, {"d":"M7 17L7.867 17C8.57 17 9.223 16.633 9.582 16.027L14.418 7.973C14.777 7.367 15.43 7 16.133 7L17 7","key":"2"}),
    createElement(Path, {"d":"M16 17L14 17L10 7L8 7","key":"3"})
  );
});

Variable.displayName = 'Variable';

module.exports = Variable;
module.exports.Variable = Variable;
module.exports.default = Variable;
