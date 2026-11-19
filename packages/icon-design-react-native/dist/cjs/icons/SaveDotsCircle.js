'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const SaveDotsCircle = forwardRef(function SaveDotsCircle(
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
    createElement(Circle, {"cx":"16.949462885140747","cy":"17.000000000480213","r":"5","key":"0"}),
    createElement(Line, {"x1":"15.449462885140747","y1":"16.990000000479995","x2":"15.449462885140747","y2":"17.000000000480213","key":"1"}),
    createElement(Line, {"x1":"18.449462885140747","y1":"16.990000000479995","x2":"18.449462885140747","y2":"17.000000000480213","key":"2"}),
    createElement(Path, {"d":"M21.949462885140747,10.000000000480213l-.000000000190994-2.171572875358834c-.000000000020009-.530432979616307-.210713680729896-1.039140805351053-.585786437559364-1.414213562220539l-3.82842712458114-3.828427124917653c-.375072756918598-.375072756956797-.883780582769759-.585786437713978-1.414213562509758-.58578643769215l-12.171572875609854.000000000549335c-1.104569499650097.000000000047294-1.999999999959982.895430500426301-1.999999999909051,2.000000000087311l.000000000718501,16.000000000003638c.000000000061846,1.104569499661011.895430500429939,1.999999999956344,2.000000000101863,1.999999999909051l5.999999999539796-.000000000811269","key":"3"}),
    createElement(Polyline, {"points":"15.949462885140747 2.000000000480213 15.949462885140747 8.000000000480213 5.949462885140747 8.000000000480213 5.949462885140747 2.000000000480213","key":"4"}),
    createElement(Polyline, {"points":"8.949462885140747 14.000000000480213 5.949462885140747 14.000000000480213 5.949462885140747 22.000000000480213","key":"5"})
  );
});

SaveDotsCircle.displayName = 'SaveDotsCircle';

module.exports = SaveDotsCircle;
module.exports.SaveDotsCircle = SaveDotsCircle;
module.exports.default = SaveDotsCircle;
