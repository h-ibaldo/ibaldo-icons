'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline, Rect } = RNSvg;

const QuestionAnswerOverlap = forwardRef(function QuestionAnswerOverlap(
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
    createElement(Path, {"d":"M11.949462885139837,14.000000000480213h-7l-3,3V4.000000000480213c0-1.104569499661011.895430500339899-2,2-2h6c1.104569499660101,0,2,.895430500338989,2,2v10Z","key":"0"}),
    createElement(Rect, {"x":"4.949462885139837","y":"5.000000000480213","width":"4","height":"4","key":"1"}),
    createElement(Line, {"x1":"7.949462885139837","y1":"11.000000000480213","x2":"6.949462885139837","y2":"9.000000000480213","key":"2"}),
    createElement(Path, {"d":"M13.949462885139837,19.000000000571163l5,.000000000218279,2.999999999869942,3.000000000138243.000000000580258-13c.000000000050022-1.104569499657373-.895430500249859-2.000000000040018-1.99999999990996-2.000000000087311l-8-.00000000036016-.0000000004502,10c-.000000000050022,1.104569499661011.895430500249859,2.000000000040018,1.99999999990996,2.000000000090949Z","key":"3"}),
    createElement(Polyline, {"points":"18.94946288536994 16.000000000480213 18.949462885540015 10.000000000789441 14.949462885540015 10.00000000061118 14.94946288536994 16.000000000298314","key":"4"}),
    createElement(Line, {"x1":"14.94946288536994","y1":"14.000000000618456","x2":"18.94946288536994","y2":"14.000000000789441","key":"5"})
  );
});

QuestionAnswerOverlap.displayName = 'QuestionAnswerOverlap';

module.exports = QuestionAnswerOverlap;
module.exports.QuestionAnswerOverlap = QuestionAnswerOverlap;
module.exports.default = QuestionAnswerOverlap;
