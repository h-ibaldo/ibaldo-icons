'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatChartWide = forwardRef(function ChatChartWide(
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
    createElement(Path, {"d":"M8 13L8 12","key":"0"}),
    createElement(Path, {"d":"M12 13L12 10","key":"1"}),
    createElement(Path, {"d":"M16 13L16 8","key":"2"}),
    createElement(Path, {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.645 18 22 14.645 22 10.5C22 6.355 18.645 3 14.5 3Z","key":"3"})
  );
});

ChatChartWide.displayName = 'ChatChartWide';

module.exports = ChatChartWide;
module.exports.ChatChartWide = ChatChartWide;
module.exports.default = ChatChartWide;
