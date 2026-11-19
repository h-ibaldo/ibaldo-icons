'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatChartBoxy = forwardRef(function ChatChartBoxy(
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
    createElement(Path, {"d":"M8 13L8 11","key":"0"}),
    createElement(Path, {"d":"M12 13L12 9","key":"1"}),
    createElement(Path, {"d":"M16 13L16 7","key":"2"}),
    createElement(Path, {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"3"})
  );
});

ChatChartBoxy.displayName = 'ChatChartBoxy';

module.exports = ChatChartBoxy;
module.exports.ChatChartBoxy = ChatChartBoxy;
module.exports.default = ChatChartBoxy;
