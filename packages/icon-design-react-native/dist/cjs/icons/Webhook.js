'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Webhook = forwardRef(function Webhook(
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
    createElement(Path, {"d":"M11.984 6.922L16.445 14.648","key":"0"}),
    createElement(Path, {"d":"M16.445 14.648C16.898 14.375 17.43 14.219 18 14.219C19.656 14.219 21 15.559 21 17.219C21 18.875 19.656 20.219 18 20.219C17.449 20.219 16.93 20.066 16.488 19.809C16.246 19.668 16.027 19.492 15.832 19.293","key":"1"}),
    createElement(Path, {"d":"M6.199 17.141L10.66 9.414","key":"2"}),
    createElement(Path, {"d":"M10.66 9.414C10.195 9.156 9.793 8.777 9.508 8.285C8.68 6.848 9.172 5.016 10.605 4.184C12.039 3.355 13.875 3.848 14.703 5.285C14.98 5.762 15.109 6.285 15.105 6.797C15.105 7.078 15.063 7.355 14.984 7.621","key":"3"}),
    createElement(Path, {"d":"M17.926 17.035L9 17.035","key":"4"}),
    createElement(Path, {"d":"M9 17.035C9.012 17.566 8.883 18.105 8.598 18.598C7.77 20.031 5.934 20.523 4.5 19.695C3.066 18.867 2.574 17.031 3.402 15.598C3.68 15.121 4.066 14.746 4.512 14.492C4.758 14.352 5.016 14.25 5.285 14.184","key":"5"})
  );
});

Webhook.displayName = 'Webhook';

module.exports = Webhook;
module.exports.Webhook = Webhook;
module.exports.default = Webhook;
