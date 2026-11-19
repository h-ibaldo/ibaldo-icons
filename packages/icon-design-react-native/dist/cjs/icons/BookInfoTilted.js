'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BookInfoTilted = forwardRef(function BookInfoTilted(
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
    createElement(Path, {"d":"M22.025268548599342,11.498779303362426l-7,10.5-12-3-.000000888179784-.000001940898983c-.586376851719251-1.281381454300572-.914672186630924-2.665695142539334-.966148104309468-4.073930403752456l-.033851007510748-.926067655348561L10.025268548599342,1.998779303362426l12,3-8,12-12-3","key":"0"}),
    createElement(Line, {"x1":"13.535268548599561","y1":"6.988779303362207","x2":"13.525268548599342","y2":"6.998779303362426","key":"1"}),
    createElement(Line, {"x1":"10.525268548599342","y1":"11.998779303362426","x2":"12.025268548599342","y2":"9.498779303362426","key":"2"})
  );
});

BookInfoTilted.displayName = 'BookInfoTilted';

module.exports = BookInfoTilted;
module.exports.BookInfoTilted = BookInfoTilted;
module.exports.default = BookInfoTilted;
