'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BoxFrontSlot = forwardRef(function BoxFrontSlot(
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
    createElement(Path, {"d":"M18.5,1.999999999998181H5.5c-.314757303330225,0-.611145617999682.148194157331091-.800000000000182.399999999999636l-2.5,3.333333333330302c-.12982212812949.17309617085084-.199999999999818.383629786449092-.199999999999818.600000000000364v14.666666666669698c0,.552284749830505.447715250169495,1,1,1h18c.552284749830505,0,1-.447715250169495,1-1V6.333333333328483c0-.216370213551272-.070177871870328-.426903829149524-.199999999999818-.600000000000364l-2.5-3.333333333330302c-.1888543820005-.251805842668546-.485242696669957-.399999999999636-.800000000000182-.399999999999636Z","key":"0"}),
    createElement(Line, {"x1":"9","y1":"11.999999999998181","x2":"15","y2":"11.999999999998181","key":"1"}),
    createElement(Path, {"d":"M22,7.999999999998181c0-.552284749830505-.447715250169495-1-1-1H3c-.552284749830505,0-1,.447715250169495-1,1","key":"2"})
  );
});

BoxFrontSlot.displayName = 'BoxFrontSlot';

module.exports = BoxFrontSlot;
module.exports.BoxFrontSlot = BoxFrontSlot;
module.exports.default = BoxFrontSlot;
