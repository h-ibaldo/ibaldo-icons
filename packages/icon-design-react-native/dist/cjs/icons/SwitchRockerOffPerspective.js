'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polygon } = RNSvg;

const SwitchRockerOffPerspective = forwardRef(function SwitchRockerOffPerspective(
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
    createElement(Line, {"x1":"18.999999977100742","y1":"1.999996563434252","x2":"18.999999977100742","y2":"21.999996563434252","key":"0"}),
    createElement(Polygon, {"points":"9.599975562490727 14.999996563488821 12.599975562490727 14.999996563758032 13.599975562219697 17.999996563848981 10.599975562219697 17.999996563579771 9.599975562490727 14.999996563488821","key":"1"}),
    createElement(Path, {"d":"M18.999999977089828,1.999996563434252H7.999999977089828l-3.399158314909073,2.719326651931624c-.965297481840025.772237985474931-1.358077547800349,2.057518587393133-.989354791439837,3.23743140773513l4.38851310634891,14.043241940333246h11","key":"2"}),
    createElement(Path, {"d":"M18.999999977089828,1.999996563434252l-3.399158314909073,2.719326651931624c-.965297481840025.772237985474931-1.358077547800349,2.057518587393133-.989354791439837,3.23743140773513l4.38851310634891,14.043241940333246","key":"3"}),
    createElement(Line, {"x1":"3.999999977089828","y1":"5.999996563434252","x2":"13.999999977089828","y2":"5.999996563434252","key":"4"}),
    createElement(Line, {"x1":"8.999999977100742","y1":"8.999996563434252","x2":"10.199951148699256","y2":"11.999996563543391","key":"5"})
  );
});

SwitchRockerOffPerspective.displayName = 'SwitchRockerOffPerspective';

module.exports = SwitchRockerOffPerspective;
module.exports.SwitchRockerOffPerspective = SwitchRockerOffPerspective;
module.exports.default = SwitchRockerOffPerspective;
