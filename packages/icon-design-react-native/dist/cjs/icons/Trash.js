'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const Trash = forwardRef(function Trash(
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
    createElement(Path, {"d":"M18.999999990399374,6.000000001481567v14c0,1.10456949966283-.895430500338989,2-2,2H6.999999990399374c-1.104569499659192,0-2-.89543050033717-2-2V6.000000001481567","key":"0"}),
    createElement(Line, {"x1":"8.999999990399374","y1":"10.000000001481567","x2":"8.999999990399374","y2":"18.000000001481567","key":"1"}),
    createElement(Line, {"x1":"14.999999990399374","y1":"10.000000001481567","x2":"14.999999990399374","y2":"18.000000001481567","key":"2"}),
    createElement(Line, {"x1":"11.999999990399374","y1":"10.000000001481567","x2":"11.999999990399374","y2":"18.000000001481567","key":"3"}),
    createElement(Line, {"x1":"2.999999990399374","y1":"6.000000001481567","x2":"20.999999990399374","y2":"6.000000001481567","key":"4"}),
    createElement(Path, {"d":"M14.999999990399374,6.000000001481567v-2.353921007723329c0-.909104324451619-.736974667830509-1.64607899227849-1.64607899227849-1.64607899227849h-2.707842015441202c-.909104324460714,0-1.646078992280309.736974667826871-1.646078992280309,1.64607899227849v2.353921007723329","key":"5"})
  );
});

Trash.displayName = 'Trash';

module.exports = Trash;
module.exports.Trash = Trash;
module.exports.default = Trash;
