'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline, Rect } = RNSvg;

const GearProgress = forwardRef(function GearProgress(
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
    createElement(Rect, {"x":"2.025268544910432","y":"17.999996560794841","width":"20","height":"3.999999996356905","rx":"1.999997970176272","ry":"1.999997970176272","key":"0"}),
    createElement(Line, {"x1":"12.025268535999203","y1":"17.999996563414243","x2":"12.025268535999203","y2":"21.999996563414243","key":"1"}),
    createElement(Line, {"x1":"4.035268535999421","y1":"19.999996563414243","x2":"4.025268535999203","y2":"19.999996563414243","key":"2"}),
    createElement(Line, {"x1":"6.035268535999421","y1":"19.999996563414243","x2":"6.025268535999203","y2":"19.999996563414243","key":"3"}),
    createElement(Line, {"x1":"8.035268535999421","y1":"19.999996563414243","x2":"8.025268535999203","y2":"19.999996563414243","key":"4"}),
    createElement(Line, {"x1":"10.035268535999421","y1":"19.999996563414243","x2":"10.025268535999203","y2":"19.999996563414243","key":"5"}),
    createElement(Circle, {"cx":"12.025268535999203","cy":"8.499996563414243","r":"4.5","key":"6"}),
    createElement(Circle, {"cx":"12.025268535999203","cy":"8.499996563414243","r":"1","key":"7"}),
    createElement(Polyline, {"points":"15.313598614120565 11.553219219664243 17.154418926620565 12.616024395445493 18.154418926620565 10.883968731382993 16.306518535999203 9.817074200132993","key":"8"}),
    createElement(Polyline, {"points":"11.025268535999203 12.879696270445493 11.025268535999203 14.999996563414243 13.025268535999203 14.999996563414243 13.025268535999203 12.879696270445493","key":"9"}),
    createElement(Polyline, {"points":"7.744018535999203 9.817074200132993 5.896118145370565 10.883968731382993 6.896118145370565 12.616024395445493 8.736938457870565 11.553219219664243","key":"10"}),
    createElement(Polyline, {"points":"8.736938457870565 5.446773907164243 6.896118145370565 4.383968731382993 5.896118145370565 6.116024395445493 7.744018535999203 7.182918926695493","key":"11"}),
    createElement(Polyline, {"points":"13.025268535999203 4.120296856382993 13.025268535999203 1.999996563414243 11.025268535999203 1.999996563414243 11.025268535999203 4.120296856382993","key":"12"}),
    createElement(Polyline, {"points":"16.306518535999203 7.182918926695493 18.154418926620565 6.116024395445493 17.154418926620565 4.383968731382993 15.313598614120565 5.446773907164243","key":"13"})
  );
});

GearProgress.displayName = 'GearProgress';

module.exports = GearProgress;
module.exports.GearProgress = GearProgress;
module.exports.default = GearProgress;
