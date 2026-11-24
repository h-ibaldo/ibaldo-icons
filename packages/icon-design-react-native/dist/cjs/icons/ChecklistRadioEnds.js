'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ChecklistRadioEnds = forwardRef(function ChecklistRadioEnds(
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
    createElement(Line, {"x1":"10.000000000260115","y1":"4.032754075946286","x2":"22.000000000260115","y2":"4.032754075946286","key":"0"}),
    createElement(Line, {"x1":"10.000000000260115","y1":"12.032754075946286","x2":"22.000000000260115","y2":"12.032754075946286","key":"1"}),
    createElement(Line, {"x1":"10.000000000260115","y1":"20.032754075946286","x2":"22.000000000260115","y2":"20.032754075946286","key":"2"}),
    createElement(Rect, {"x":"2.000000006905196","y":"2.032754065191796","width":"3.999999986629575","height":"3.999999993205051","rx":"1.999997982950238","ry":"1.999997982950238","key":"3"}),
    createElement(Rect, {"x":"2.000000006905196","y":"10.032754060027656","width":"3.999999986629575","height":"4.000000003324601","rx":"1.999997985738534","ry":"1.999997985738534","key":"4"}),
    createElement(Rect, {"x":"2.000000006905196","y":"18.032754065149959","width":"3.999999986629575","height":"3.999999993079996","rx":"1.99999798434157","ry":"1.99999798434157","key":"5"}),
    createElement(Rect, {"x":"2.999999995047887","y":"3.032754077664691","width":"2.000000010344422","height":"1.99999999656319","rx":".999999019315239","ry":".999999019315239","key":"6"}),
    createElement(Rect, {"x":"2.999999995047887","y":"19.032754067420143","width":"2.000000010344422","height":"2.000000017052287","rx":".999999014456917","ry":".999999014456917","key":"7"})
  );
});

ChecklistRadioEnds.displayName = 'ChecklistRadioEnds';

module.exports = ChecklistRadioEnds;
module.exports.ChecklistRadioEnds = ChecklistRadioEnds;
module.exports.default = ChecklistRadioEnds;
