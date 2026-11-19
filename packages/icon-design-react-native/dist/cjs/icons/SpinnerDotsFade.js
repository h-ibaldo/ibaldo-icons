'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polygon, Rect } = RNSvg;

const SpinnerDotsFade = forwardRef(function SpinnerDotsFade(
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
    createElement(Circle, {"cx":"11.949462885142566","cy":"4.000000000480213","r":"1","key":"0"}),
    createElement(Circle, {"cx":"11.949462885142566","cy":"20.000000000480213","r":"1","key":"1"}),
    createElement(Circle, {"cx":"6.292608635777924","cy":"6.343145750863187","r":"1.000000000000169","key":"2"}),
    createElement(Circle, {"cx":"17.606317134507663","cy":"6.343145750859549","r":"1.000000000000169","key":"3"}),
    createElement(Circle, {"cx":"6.292608635777242","cy":"17.65685425009724","r":".999999999999847","key":"4"}),
    createElement(Rect, {"x":"19.949462885142566","y":"12.000000000116415","key":"5"}),
    createElement(Circle, {"cx":"3.949462885144385","cy":"12.000000000836735","r":"1","key":"6"}),
    createElement(Polygon, {"points":"19.939462885142348 12.000000000116415 19.949462885142566 12.000000000116415 19.949462885142566 12.000000000116415 19.949462885142566 12.000000000116415 19.939462885142348 12.000000000116415","key":"7"}),
    createElement(Rect, {"x":"17.606317134506753","y":"17.656854250100878","key":"8"}),
    createElement(Polygon, {"points":"17.596317134506535 17.656854250100878 17.606317134506753 17.656854250100878 17.606317134506753 17.656854250100878 17.606317134506753 17.656854250100878 17.596317134506535 17.656854250100878","key":"9"}),
    createElement(Circle, {"cx":"3.949462885144385","cy":"12.000000000836735","r":"1","key":"10"})
  );
});

SpinnerDotsFade.displayName = 'SpinnerDotsFade';

module.exports = SpinnerDotsFade;
module.exports.SpinnerDotsFade = SpinnerDotsFade;
module.exports.default = SpinnerDotsFade;
