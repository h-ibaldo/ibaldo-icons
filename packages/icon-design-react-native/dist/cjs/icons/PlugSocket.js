'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PlugSocket = forwardRef(function PlugSocket(
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
    createElement(Path, {"d":"M5.496 18.504L2.496 21.504","key":"0"}),
    createElement(Path, {"d":"M18.742 5.258L21.742 2.258","key":"1"}),
    createElement(Path, {"d":"M8 13L10 11","key":"2"}),
    createElement(Path, {"d":"M11 16L13 14","key":"3"}),
    createElement(Path, {"d":"M4.121 12.879L5.293 11.707C5.684 11.316 6.316 11.316 6.707 11.707L12.293 17.293C12.684 17.684 12.684 18.316 12.293 18.707L11.121 19.879C9.949 21.051 8.051 21.051 6.879 19.879L4.121 17.121C2.949 15.949 2.949 14.051 4.121 12.879Z","key":"4"}),
    createElement(Path, {"d":"M20.121 10.879L18.949 12.051C18.559 12.441 17.926 12.441 17.535 12.051L11.949 6.465C11.559 6.074 11.559 5.441 11.949 5.051L13.121 3.879C14.293 2.707 16.191 2.707 17.363 3.879L20.121 6.637C21.293 7.809 21.293 9.707 20.121 10.879Z","key":"5"})
  );
});

PlugSocket.displayName = 'PlugSocket';

module.exports = PlugSocket;
module.exports.PlugSocket = PlugSocket;
module.exports.default = PlugSocket;
