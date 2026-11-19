'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Rect } = RNSvg;

const AddressBookPlain = forwardRef(function AddressBookPlain(
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
    createElement(Circle, {"cx":"12","cy":"9.999999999998181","r":"3","key":"0"}),
    createElement(Path, {"d":"M16,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209819246-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535","key":"1"}),
    createElement(Rect, {"x":"3","y":"1.999999999998181","width":"18","height":"20","rx":"1.897366596100255","ry":"1.897366596100255","key":"2"})
  );
});

AddressBookPlain.displayName = 'AddressBookPlain';

module.exports = AddressBookPlain;
module.exports.AddressBookPlain = AddressBookPlain;
module.exports.default = AddressBookPlain;
