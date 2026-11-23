'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MailCheckFolds = forwardRef(function MailCheckFolds(
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
    createElement(Path, {"d":"M14 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 12","key":"0"}),
    createElement(Path, {"d":"M2.367 5.242L12 14L21.633 5.242","key":"1"}),
    createElement(Path, {"d":"M9.801 12L2.367 18.758","key":"2"}),
    createElement(Path, {"d":"M22.191 14.844L18.191 18.844L16.191 16.844","key":"3"})
  );
});

MailCheckFolds.displayName = 'MailCheckFolds';

module.exports = MailCheckFolds;
module.exports.MailCheckFolds = MailCheckFolds;
module.exports.default = MailCheckFolds;
