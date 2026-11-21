'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PhoneHangupArrowBounce = forwardRef(function PhoneHangupArrowBounce(
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
    createElement(Path, {"d":"M10.477 13L13.523 13C15.293 13 17.039 13.418 18.621 14.227C20.152 15.004 21.27 16.422 21.684 18.109L21.934 19.129C22.121 19.887 21.902 20.691 21.359 21.246L21.258 21.348C20.738 21.875 19.996 22.102 19.281 21.957L16.84 21.461C15.551 21.199 14.777 19.844 15.191 18.57L15.613 17.289L15.461 17.238C13.215 16.477 10.785 16.477 8.539 17.238L8.387 17.289L8.809 18.57C9.223 19.844 8.449 21.199 7.16 21.461L4.719 21.957C4.004 22.102 3.262 21.875 2.742 21.348L2.641 21.246C2.098 20.691 1.879 19.887 2.066 19.129L2.316 18.109C2.73 16.422 3.848 15.004 5.379 14.227C6.961 13.418 8.707 13 10.477 13Z","key":"0"}),
    createElement(Path, {"d":"M18 8.242L18 4L13.758 4M18 4L12.344 9.656L6 4","key":"1"})
  );
});

PhoneHangupArrowBounce.displayName = 'PhoneHangupArrowBounce';

module.exports = PhoneHangupArrowBounce;
module.exports.PhoneHangupArrowBounce = PhoneHangupArrowBounce;
module.exports.default = PhoneHangupArrowBounce;
