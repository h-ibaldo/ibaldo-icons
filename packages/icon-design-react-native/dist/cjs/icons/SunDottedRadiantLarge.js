'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunDottedRadiantLarge = forwardRef(function SunDottedRadiantLarge(
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
    createElement(Circle, {"cx":"12","cy":"12.000000003949481","r":"6.999999999999773","key":"0"}),
    createElement(Line, {"x1":"12","y1":"21.989999999997963","x2":"12","y2":"21.999999999998181","key":"1"}),
    createElement(Line, {"x1":"12","y1":"2.009999999998399","x2":"12","y2":"1.999999999998181","key":"2"}),
    createElement(Line, {"x1":"2.010000000000218","y1":"11.999999999998181","x2":"2","y2":"11.999999999998181","key":"3"}),
    createElement(Line, {"x1":"21.989999999999782","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181","key":"4"}),
    createElement(Line, {"x1":"4.93893218829362","y1":"19.061067812022884","x2":"4.928932188293402","y2":"19.071067812023102","key":"5"}),
    createElement(Line, {"x1":"19.06106781170638","y1":"4.938932187975297","x2":"19.071067811706598","y2":"4.928932187975079","key":"6"}),
    createElement(Line, {"x1":"4.938932187977116","y1":"4.938932188291801","x2":"4.928932187976898","y2":"4.928932188291583","key":"7"}),
    createElement(Line, {"x1":"19.061067812024703","y1":"19.061067811704561","x2":"19.071067812024921","y2":"19.071067811704779","key":"8"}),
    createElement(Line, {"x1":"15.826834323546791","y1":"21.228795325154351","x2":"15.826834323546791","y2":"21.23879532515457","key":"9"}),
    createElement(Line, {"x1":"8.173165676453209","y1":"2.77120467484383","x2":"8.173165676453209","y2":"2.761204674843611","key":"10"}),
    createElement(Line, {"x1":"2.77120467484383","y1":"15.826834323546791","x2":"2.761204674843611","y2":"15.826834323546791","key":"11"}),
    createElement(Line, {"x1":"21.22879532515617","y1":"8.17316567645139","x2":"21.238795325156389","y2":"8.17316567645139","key":"12"}),
    createElement(Line, {"x1":"8.173165676453209","y1":"21.228795325154351","x2":"8.173165676453209","y2":"21.23879532515457","key":"13"}),
    createElement(Line, {"x1":"15.826834323546791","y1":"2.77120467484383","x2":"15.826834323546791","y2":"2.761204674843611","key":"14"}),
    createElement(Line, {"x1":"2.77120467484383","y1":"8.17316567645139","x2":"2.761204674843611","y2":"8.17316567645139","key":"15"}),
    createElement(Line, {"x1":"21.22879532515617","y1":"15.826834323544972","x2":"21.238795325156389","y2":"15.826834323544972","key":"16"})
  );
});

SunDottedRadiantLarge.displayName = 'SunDottedRadiantLarge';

module.exports = SunDottedRadiantLarge;
module.exports.SunDottedRadiantLarge = SunDottedRadiantLarge;
module.exports.default = SunDottedRadiantLarge;
