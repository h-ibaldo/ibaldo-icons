'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BadgePercentJaggedRound = forwardRef(function BadgePercentJaggedRound(
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
    createElement(Path, {"d":"M12.797 3.148L13.492 4.066C13.77 4.426 14.254 4.559 14.676 4.383L15.734 3.938C16.348 3.68 17.031 4.078 17.113 4.734L17.262 5.875C17.316 6.328 17.672 6.684 18.125 6.738L19.27 6.883C19.922 6.969 20.32 7.652 20.063 8.262L19.617 9.324C19.441 9.746 19.57 10.23 19.938 10.508L20.852 11.203C21.379 11.605 21.379 12.398 20.852 12.797L19.938 13.492C19.57 13.77 19.441 14.254 19.617 14.676L20.063 15.738C20.32 16.348 19.922 17.031 19.27 17.117L18.125 17.262C17.672 17.316 17.316 17.672 17.262 18.125L17.113 19.266C17.031 19.922 16.348 20.32 15.734 20.066L14.676 19.617C14.254 19.441 13.77 19.574 13.492 19.934L12.797 20.852C12.398 21.379 11.605 21.379 11.203 20.852L10.508 19.934C10.23 19.574 9.746 19.441 9.324 19.617L8.266 20.066C7.652 20.32 6.969 19.922 6.887 19.266L6.738 18.125C6.684 17.672 6.324 17.316 5.875 17.262L4.734 17.117C4.074 17.031 3.68 16.348 3.938 15.738L4.383 14.676C4.559 14.254 4.43 13.77 4.066 13.492L3.148 12.797C2.621 12.398 2.621 11.605 3.148 11.203L4.066 10.508C4.43 10.23 4.559 9.746 4.383 9.324L3.938 8.262C3.68 7.652 4.074 6.969 4.734 6.883L5.875 6.738C6.324 6.684 6.684 6.328 6.738 5.875L6.887 4.734C6.969 4.078 7.652 3.68 8.266 3.938L9.324 4.383C9.746 4.559 10.23 4.426 10.508 4.066L11.203 3.148C11.605 2.621 12.398 2.621 12.797 3.148Z","key":"0"}),
    createElement(Path, {"d":"M9 15L15 9","key":"1"}),
    createElement(Path, {"d":"M9 9L9 9","key":"2"}),
    createElement(Path, {"d":"M15 15L15 15","key":"3"})
  );
});

BadgePercentJaggedRound.displayName = 'BadgePercentJaggedRound';

module.exports = BadgePercentJaggedRound;
module.exports.BadgePercentJaggedRound = BadgePercentJaggedRound;
module.exports.default = BadgePercentJaggedRound;
