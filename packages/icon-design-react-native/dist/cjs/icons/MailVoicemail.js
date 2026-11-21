'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MailVoicemail = forwardRef(function MailVoicemail(
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
    createElement(Path, {"d":"M8 17C8 15.895 8.895 15 10 15C11.105 15 12 15.895 12 17C12 18.105 11.105 19 10 19C8.895 19 8 18.105 8 17Z","key":"0"}),
    createElement(Path, {"d":"M15 17C15 15.895 15.895 15 17 15C18.105 15 19 15.895 19 17C19 18.105 18.105 19 17 19C15.895 19 15 18.105 15 17Z","key":"1"}),
    createElement(Path, {"d":"M10 19L17 19","key":"2"}),
    createElement(Path, {"d":"M7 12L20 12C21.105 12 22 12.895 22 14L22 20C22 21.105 21.105 22 20 22L7 22C5.895 22 5 21.105 5 20L5 14C5 12.895 5.895 12 7 12Z","key":"3"}),
    createElement(Path, {"d":"M2.754 11.566C2.297 11.199 2 10.633 2 10L2 4C2 2.895 2.895 2 4 2L16 2C17.105 2 18 2.895 18 4L18 9","key":"4"}),
    createElement(Path, {"d":"M3 3L10 8L17 3","key":"5"})
  );
});

MailVoicemail.displayName = 'MailVoicemail';

module.exports = MailVoicemail;
module.exports.MailVoicemail = MailVoicemail;
module.exports.default = MailVoicemail;
