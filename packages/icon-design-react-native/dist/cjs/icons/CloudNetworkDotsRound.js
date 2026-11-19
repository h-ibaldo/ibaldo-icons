'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const CloudNetworkDotsRound = forwardRef(function CloudNetworkDotsRound(
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
    createElement(Path, {"d":"M17.924255383690252,7.093139621938462c-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.761413574211474,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425788526,5-5,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862Z","key":"0"}),
    createElement(Line, {"x1":"7","y1":"21.999999973497324","x2":"17","y2":"21.999999973497324","key":"1"}),
    createElement(Line, {"x1":"12","y1":"16.999999973497324","x2":"12","y2":"21.999999973497324","key":"2"}),
    createElement(Line, {"x1":"19.989999999999782","y1":"21.999999973497324","x2":"20","y2":"21.999999973497324","key":"3"}),
    createElement(Line, {"x1":"4.010000000000218","y1":"21.999999973497324","x2":"4","y2":"21.999999973497324","key":"4"})
  );
});

CloudNetworkDotsRound.displayName = 'CloudNetworkDotsRound';

module.exports = CloudNetworkDotsRound;
module.exports.CloudNetworkDotsRound = CloudNetworkDotsRound;
module.exports.default = CloudNetworkDotsRound;
