'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const TrashEmptyNotch = forwardRef(function TrashEmptyNotch(
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
    createElement(Polyline, {"points":"22.025268545410654 4.000000000133696 15.025268545410654 4.000000000448381 15.025268545319705 2.000000000448381 9.025268545319705 2.00000000071941 9.025268545410654 4.00000000071941 2.025268545410654 4.000000001032276","key":"0"}),
    createElement(Path, {"d":"M20.025268545410654,4.000000000224645l.00000000072032,16c.000000000049113,1.104569499661011-.895430500251678,2.000000000040018-1.99999999991087,2.00000000008913l-12,.00000000053933c-1.104569499659192.000000000048203-2.000000000040018-.895430500248949-2.00000000008913-1.999999999911779l-.00000000072032-16","key":"1"})
  );
});

TrashEmptyNotch.displayName = 'TrashEmptyNotch';

module.exports = TrashEmptyNotch;
module.exports.TrashEmptyNotch = TrashEmptyNotch;
module.exports.default = TrashEmptyNotch;
