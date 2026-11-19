'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline, Rect } = RNSvg;

const ScreenShareArrows = forwardRef(function ScreenShareArrows(
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
    createElement(Rect, {"x":"1.974731440099276","y":"2.000000003885361","width":"10","height":"6","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"4.974731440099276","y1":"11.000000003885361","x2":"8.974731440099276","y2":"11.000000003885361","key":"1"}),
    createElement(Rect, {"x":"11.974731440099276","y":"13.000000003885361","width":"10","height":"6","rx":"1","ry":"1","key":"2"}),
    createElement(Line, {"x1":"14.974731440099276","y1":"22.000000003885361","x2":"18.974731440099276","y2":"22.000000003885361","key":"3"}),
    createElement(Polyline, {"points":"16.974731440099276 7.000000003885361 18.974731440099276 9.000000003885361 20.974731440099276 7.000000003885361","key":"4"}),
    createElement(Path, {"d":"M15.974731440099276,2.000000003885361h1c1.104569499670106,0,2,.895430500338989,2,2v5","key":"5"}),
    createElement(Polyline, {"points":"6.974731440099276 17.000000003885361 4.974731440099276 15.000000003885361 2.974731440099276 17.000000003885361","key":"6"}),
    createElement(Path, {"d":"M8.974731440099276,22.000000003885361h-2c-1.104569499659192,0-2-.895430500338989-2-2v-5","key":"7"})
  );
});

ScreenShareArrows.displayName = 'ScreenShareArrows';

module.exports = ScreenShareArrows;
module.exports.ScreenShareArrows = ScreenShareArrows;
module.exports.default = ScreenShareArrows;
