'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatWarningSharp = forwardRef(function ChatWarningSharp(
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
    createElement(Path, {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z","key":"0"}),
    createElement(Path, {"d":"M15.5 7L15.5 6","key":"1"}),
    createElement(Path, {"d":"M15.5 10L15.5 10","key":"2"}),
    createElement(Path, {"d":"M9 2.461C4.941 3.734 2 7.523 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C15.699 22 18.922 19.988 20.652 17","key":"3"})
  );
});

ChatWarningSharp.displayName = 'ChatWarningSharp';

module.exports = ChatWarningSharp;
module.exports.ChatWarningSharp = ChatWarningSharp;
module.exports.default = ChatWarningSharp;
