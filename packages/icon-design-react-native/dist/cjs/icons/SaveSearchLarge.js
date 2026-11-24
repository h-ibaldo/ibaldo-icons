'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const SaveSearchLarge = forwardRef(function SaveSearchLarge(
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
    createElement(Path, {"d":"M8.974731440099276,16.000000003885361H3.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V4.000000003885361c0-1.104569499661011.895430500340808-2,2-2h8.17157224750008c.530433351021202,0,1.039141501631093.210713974949613,1.414214320151586.585787195414014l1.828427752519929,1.828429711989884c.375072293318226.375072695282142.585785679828405.883780196265434.585785679828405,1.414212804585986v3.171570288010116","key":"0"}),
    createElement(Circle, {"cx":"16.474731440099276","cy":"16.500000003885361","r":"4.5","key":"1"}),
    createElement(Polyline, {"points":"5.974731440099276 16.000000003885361 5.974731440099276 11.000000003885361 10.974731440099276 11.000000003885361","key":"2"}),
    createElement(Polyline, {"points":"5.974731440099276 2.000000003885361 5.974731440099276 6.000000003885361 11.974731440099276 6.000000003885361 11.974731440099276 2.000000003885361","key":"3"}),
    createElement(Line, {"x1":"19.656738276049509","y1":"19.682006839822861","x2":"21.974731440099276","y2":"22.000000003885361","key":"4"})
  );
});

SaveSearchLarge.displayName = 'SaveSearchLarge';

module.exports = SaveSearchLarge;
module.exports.SaveSearchLarge = SaveSearchLarge;
module.exports.default = SaveSearchLarge;
