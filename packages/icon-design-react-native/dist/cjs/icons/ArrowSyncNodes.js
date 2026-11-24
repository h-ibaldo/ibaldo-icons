'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const ArrowSyncNodes = forwardRef(function ArrowSyncNodes(
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
    createElement(Polyline, {"points":"10.99999999963984 1.999999999998181 12.99999999963984 3.999999999998181 10.99999999963984 5.999999999998181","key":"0"}),
    createElement(Circle, {"cx":"3.99999999963984","cy":"11.999999999278316","r":"1.999999999640067","key":"1"}),
    createElement(Path, {"d":"M4.24957275318593,13.974853515617724c.458251953125,1.803466796880457,1.525634765625,3.364013671880457,2.974609375,4.44384765625","key":"2"}),
    createElement(Path, {"d":"M11.99999999927968,3.999999999998181c-3.73565673828125,0-6.864013671875,2.56396484375-7.744384765625,6.025756835940228","key":"3"}),
    createElement(Polyline, {"points":"12.99999999963984 21.999999999998181 10.99999999963984 19.999999999998181 12.99999999963984 17.999999999998181","key":"4"}),
    createElement(Circle, {"cx":"19.99999999963984","cy":"12.000000000718501","r":"1.99999999963984","key":"5"}),
    createElement(Path, {"d":"M19.75042724609375,10.025146484367724c-.458251953125-1.803466796869543-1.525634765625-3.364013671869543-2.974609375-4.44384765625","key":"6"}),
    createElement(Path, {"d":"M12,19.999999999998181c3.73565673828125,0,6.864013671875-2.56396484375,7.744384765625-6.025756835939319","key":"7"})
  );
});

ArrowSyncNodes.displayName = 'ArrowSyncNodes';

module.exports = ArrowSyncNodes;
module.exports.ArrowSyncNodes = ArrowSyncNodes;
module.exports.default = ArrowSyncNodes;
