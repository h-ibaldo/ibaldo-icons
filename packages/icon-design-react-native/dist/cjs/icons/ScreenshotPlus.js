'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const ScreenshotPlus = forwardRef(function ScreenshotPlus(
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
    createElement(Path, {"d":"M2.041899007130269,4.000000000589353v-1c0-.552284749828686.447715250169495-1,1-1h1","key":"0"}),
    createElement(Line, {"x1":"14.041899007130269","y1":"2.00000000061118","x2":"13.041899007130269","y2":"2.00000000061118","key":"1"}),
    createElement(Line, {"x1":"9.041899007130269","y1":"2.00000000061118","x2":"8.041899007150278","y2":"2.00000000061118","key":"2"}),
    createElement(Line, {"x1":"14.041899007130269","y1":"20.000000000589353","x2":"13.041899007130269","y2":"20.000000000589353","key":"3"}),
    createElement(Line, {"x1":"9.041899007130269","y1":"20.000000000589353","x2":"8.041899007150278","y2":"20.000000000589353","key":"4"}),
    createElement(Path, {"d":"M4.041899007130269,20.000000000589353l-1-.000000000043656c-.552284749830505-.000000000025466-.999999999979991-.447715250214969-.999999999949978-1.000000000047294l.000000000040018-1","key":"5"}),
    createElement(Line, {"x1":"2.041899007690517","y1":"8.000000000498403","x2":"2.0418990076505","y2":"9.000000000498403","key":"6"}),
    createElement(Line, {"x1":"2.04189900747042","y1":"13.000000000498403","x2":"2.041899007419488","y2":"14.000000000476575","key":"7"}),
    createElement(Line, {"x1":"20.041899007130269","y1":"8.000000000498403","x2":"20.041899007080247","y2":"9.000000000498403","key":"8"}),
    createElement(Line, {"x1":"20.041899006900167","y1":"13.000000000498403","x2":"20.041899006860149","y2":"14.000000000476575","key":"9"}),
    createElement(Path, {"d":"M18.041899007180291,2.000000000589353l1,.000000000043656c.552284749829596.000000000025466.999999999979991.447715250214969.999999999949978,1.000000000043656l-.000000000040018,1","key":"10"}),
    createElement(Line, {"x1":"20.041899007130269","y1":"18.000000000589353","x2":"20.041899007130269","y2":"22.000000000589353","key":"11"}),
    createElement(Line, {"x1":"22.041899007130269","y1":"20.000000000589353","x2":"18.041899007130269","y2":"20.000000000589353","key":"12"})
  );
});

ScreenshotPlus.displayName = 'ScreenshotPlus';

module.exports = ScreenshotPlus;
module.exports.ScreenshotPlus = ScreenshotPlus;
module.exports.default = ScreenshotPlus;
