'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const QuestionAnswer = forwardRef(function QuestionAnswer(
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
    createElement(Polyline, {"points":"1.949462885900175 2.000000000480213 9.949462885900175 2.000000000480213 9.949462885900175 16.000000000480213 4.949462885900175 16.000000000480213 1.949462885900175 19.000000000480213 1.949462885900175 16.000000000480213","key":"0"}),
    createElement(Rect, {"x":"1.949462885900175","y":"6.000000000480213","width":"4","height":"4","key":"1"}),
    createElement(Line, {"x1":"4.949462885900175","y1":"12.000000000480213","x2":"3.949462885900175","y2":"10.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"21.949462885139837 5.000000000480213 13.949462885139837 5.000000000840373 13.949462885770117 19.000000000840373 18.949462885770117 19.00000000061118 21.949462885900175 22.000000000480213 21.949462885770117 19.000000000480213","key":"3"}),
    createElement(Polyline, {"points":"17.949462885900175 15.000000000480213 17.949462885900175 9.000000000480213 21.949462885900175 9.000000000480213 21.949462885900175 15.000000000480213","key":"4"}),
    createElement(Line, {"x1":"17.949462885900175","y1":"13.000000000480213","x2":"21.949462885900175","y2":"13.000000000480213","key":"5"})
  );
});

QuestionAnswer.displayName = 'QuestionAnswer';

module.exports = QuestionAnswer;
module.exports.QuestionAnswer = QuestionAnswer;
module.exports.default = QuestionAnswer;
