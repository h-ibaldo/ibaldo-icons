'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const ListStar = forwardRef(function ListStar(
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
    createElement(Line, {"x1":"21.974731439739116","y1":"3.000000003885361","x2":"1.974731439739116","y2":"3.000000004336471","key":"0"}),
    createElement(Line, {"x1":"21.974731440099276","y1":"11.000000003885361","x2":"1.974731440099276","y2":"11.000000004336471","key":"1"}),
    createElement(Line, {"x1":"10.974731440099276","y1":"19.000000004336471","x2":"1.974731440459436","y2":"19.000000004783942","key":"2"}),
    createElement(Polygon, {"points":"18.97473266841007 16.000001043441443 18.266528924899831 18.2917964997323 15.974733468639897 18.291796499837801 17.828834940459274 19.708203986981971 17.120631196950853 21.999999443276465 18.974732668619254 20.58359195596131 20.828834140429535 21.999999443109118 20.120630396710112 19.70820398687647 21.97473186840034 18.291796499568591 19.682936412129493 18.291796499670454 18.97473266841007 16.000001043441443","key":"3"})
  );
});

ListStar.displayName = 'ListStar';

module.exports = ListStar;
module.exports.ListStar = ListStar;
module.exports.default = ListStar;
