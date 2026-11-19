'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const TrashBanNotch = forwardRef(function TrashBanNotch(
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
    createElement(Polyline, {"points":"21.974731449689898 3.999999999111424 14.974731449689898 3.999999999427018 14.974731449599858 1.999999999427018 8.974731449599858 1.999999999697138 8.974731449689898 3.999999999697138 1.974731449689898 4.000000000009095","key":"0"}),
    createElement(Path, {"d":"M9.974731450500258,21.999999999202373l-4,.00000000062937c-1.104569499670106.000000000050022-2.000000000040018-.895430500248949-2.00000000009004-1.99999999990996l-.00000000072032-16.000000000001819","key":"1"}),
    createElement(Line, {"x1":"19.974731449689898","y1":"3.999999999202373","x2":"19.974731450500258","y2":"9.000000000459295","key":"2"}),
    createElement(Circle, {"cx":"17.00766343297505","cy":"16.967068017581141","r":"5.032931982877244","key":"3"}),
    createElement(Line, {"x1":"13.448843098550242","y1":"20.525888351846334","x2":"20.566483767400314","y2":"13.408247683318223","key":"4"})
  );
});

TrashBanNotch.displayName = 'TrashBanNotch';

module.exports = TrashBanNotch;
module.exports.TrashBanNotch = TrashBanNotch;
module.exports.default = TrashBanNotch;
