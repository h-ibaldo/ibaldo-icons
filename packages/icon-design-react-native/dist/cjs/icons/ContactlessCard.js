'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ContactlessCard = forwardRef(function ContactlessCard(
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
    createElement(Path, {"d":"M12 10.023C13.148 11.172 13.148 13.035 12 14.184","key":"0"}),
    createElement(Path, {"d":"M14.945 7.383C17.551 9.988 17.551 14.219 14.945 16.824","key":"1"}),
    createElement(Path, {"d":"M17.887 4.59C22.035 8.738 22.035 15.469 17.887 19.617","key":"2"}),
    createElement(Path, {"d":"M4 8L7 8C7.551 8 8 8.449 8 9L8 15C8 15.551 7.551 16 7 16L4 16C3.449 16 3 15.551 3 15L3 9C3 8.449 3.449 8 4 8Z","key":"3"})
  );
});

ContactlessCard.displayName = 'ContactlessCard';

module.exports = ContactlessCard;
module.exports.ContactlessCard = ContactlessCard;
module.exports.default = ContactlessCard;
