'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const TrashBan = forwardRef(function TrashBan(
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
    createElement(Path, {"d":"M8.974731450170111,22.000000000459295h-2.000000000120053c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023","key":"0"}),
    createElement(Line, {"x1":"16.974731450050058","y1":"6.000000000462023","x2":"16.974731450050058","y2":"9.000000000459295","key":"1"}),
    createElement(Line, {"x1":"2.974731450050058","y1":"6.000000000462023","x2":"18.974731450050058","y2":"6.000000000462023","key":"2"}),
    createElement(Path, {"d":"M13.974731450050058,6.000000000462023v-2.35392100772242c0-.909104324453438-.7369746678296-1.646078992280309-1.646078992280309-1.646078992280309h-2.707842015440292c-.9091043244498,0-1.646078992279399.736974667826871-1.646078992279399,1.646078992280309v2.35392100772242","key":"3"}),
    createElement(Circle, {"cx":"15.941799467220108","cy":"17.032932035377598","r":"5.032931982879632","key":"4"}),
    createElement(Line, {"x1":"12.382979132789842","y1":"20.591752369644382","x2":"19.500619801639914","y2":"13.474111701115362","key":"5"})
  );
});

TrashBan.displayName = 'TrashBan';

module.exports = TrashBan;
module.exports.TrashBan = TrashBan;
module.exports.default = TrashBan;
