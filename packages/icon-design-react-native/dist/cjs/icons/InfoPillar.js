'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const InfoPillar = forwardRef(function InfoPillar(
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
    createElement(Polyline, {"points":"7.025268553439673 10.99999656424734 10.025268553439673 10.99999656424734 10.025268553439673 21.999996564243702","key":"0"}),
    createElement(Polyline, {"points":"10.025268553439673 10.99999656424734 14.025268553439673 10.99999656424734 14.025268553439673 21.999996564243702","key":"1"}),
    createElement(Line, {"x1":"7.025268553439673","y1":"21.999996564243702","x2":"17.025268553439673","y2":"21.999996564243702","key":"2"}),
    createElement(Circle, {"cx":"12.025268553439673","cy":"4.99999656424734","r":"3","key":"3"})
  );
});

InfoPillar.displayName = 'InfoPillar';

module.exports = InfoPillar;
module.exports.InfoPillar = InfoPillar;
module.exports.default = InfoPillar;
