'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Path, Polyline } = RNSvg;

const MailSearchFolds = forwardRef(function MailSearchFolds(
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
    createElement(Path, {"d":"M9.999999976489562,15.998779299956368H2.999999976489562c-.552284749830505,0-1-.447715250167676-1-1V2.998779299956368c0-.552284749828686.447715250169495-1,1-1h18c.552284749830505,0,1,.447715250171314,1,1v6","key":"0"}),
    createElement(Polyline, {"points":"2.367126441329674 2.241638186675118 11.999999976489562 10.998779299956368 21.63287351164945 2.241638186675118","key":"1"}),
    createElement(Line, {"x1":"9.799987769460131","y1":"8.998779299956368","x2":"2.367126441329674","y2":"15.755920413237618","key":"2"}),
    createElement(G, {"key":"3"},
      createElement(Circle, {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4","key":"0"}),
      createElement(Line, {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368","key":"1"}))
  );
});

MailSearchFolds.displayName = 'MailSearchFolds';

module.exports = MailSearchFolds;
module.exports.MailSearchFolds = MailSearchFolds;
module.exports.default = MailSearchFolds;
