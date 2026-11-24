'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Polyline } = RNSvg;

const BoxPerspectiveShaded = forwardRef(function BoxPerspectiveShaded(
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
    createElement(Polygon, {"points":"12 1.999999999998181 2 5.999999999998181 2 17.999999999998181 12 21.999999999998181 22 17.999999999998181 22 5.999999999998181 12 1.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"22 5.999999999998181 12 9.999999999998181 12 21.999999999998181","key":"1"}),
    createElement(Polyline, {"points":"17 3.999999999998181 7 7.999999999998181 7 10.999999999998181","key":"2"}),
    createElement(Line, {"x1":"15","y1":"8.999999999998181","x2":"15.010000000000218","y2":"8.999999999998181","key":"3"}),
    createElement(Line, {"x1":"18","y1":"8.999999999998181","x2":"18.010000000000218","y2":"8.999999999998181","key":"4"}),
    createElement(Line, {"x1":"21","y1":"8.999999999998181","x2":"21.010000000000218","y2":"8.999999999998181","key":"5"}),
    createElement(Line, {"x1":"14","y1":"10.999999999998181","x2":"14.010000000000218","y2":"10.999999999998181","key":"6"}),
    createElement(Line, {"x1":"17","y1":"10.999999999998181","x2":"17.010000000000218","y2":"10.999999999998181","key":"7"}),
    createElement(Line, {"x1":"20","y1":"10.999999999998181","x2":"20.010000000000218","y2":"10.999999999998181","key":"8"}),
    createElement(Line, {"x1":"20","y1":"6.999999999998181","x2":"20.010000000000218","y2":"6.999999999998181","key":"9"}),
    createElement(Line, {"x1":"15","y1":"12.999999999998181","x2":"15.010000000000218","y2":"12.999999999998181","key":"10"}),
    createElement(Line, {"x1":"18","y1":"12.999999999998181","x2":"18.010000000000218","y2":"12.999999999998181","key":"11"}),
    createElement(Line, {"x1":"21","y1":"12.999999999998181","x2":"21.010000000000218","y2":"12.999999999998181","key":"12"}),
    createElement(Line, {"x1":"14","y1":"14.999999999998181","x2":"14.010000000000218","y2":"14.999999999998181","key":"13"}),
    createElement(Line, {"x1":"17","y1":"14.999999999998181","x2":"17.010000000000218","y2":"14.999999999998181","key":"14"}),
    createElement(Line, {"x1":"20","y1":"14.999999999998181","x2":"20.010000000000218","y2":"14.999999999998181","key":"15"}),
    createElement(Line, {"x1":"15","y1":"16.999999999998181","x2":"15.010000000000218","y2":"16.999999999998181","key":"16"}),
    createElement(Line, {"x1":"18","y1":"16.999999999998181","x2":"18.010000000000218","y2":"16.999999999998181","key":"17"}),
    createElement(Line, {"x1":"21","y1":"16.999999999998181","x2":"21.010000000000218","y2":"16.999999999998181","key":"18"}),
    createElement(Line, {"x1":"14","y1":"18.999999999998181","x2":"14.010000000000218","y2":"18.999999999998181","key":"19"}),
    createElement(Line, {"x1":"17","y1":"18.999999999998181","x2":"17.010000000000218","y2":"18.999999999998181","key":"20"})
  );
});

BoxPerspectiveShaded.displayName = 'BoxPerspectiveShaded';

module.exports = BoxPerspectiveShaded;
module.exports.BoxPerspectiveShaded = BoxPerspectiveShaded;
module.exports.default = BoxPerspectiveShaded;
