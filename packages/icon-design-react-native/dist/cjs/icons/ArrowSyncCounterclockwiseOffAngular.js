'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const ArrowSyncCounterclockwiseOffAngular = forwardRef(function ArrowSyncCounterclockwiseOffAngular(
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
    createElement(Path, {"d":"M17.000000000807631,7.999999999688953l-.000000000447471-3.999999999909051,4-.000000000451109","key":"0"}),
    createElement(Line, {"x1":"21","y1":"21","x2":"3","y2":"3","key":"1"}),
    createElement(Path, {"d":"M18.36395263671875,18.364013671880457c-1.62872314453125,1.628662109369543-3.878662109375,2.635986328119543-6.36395263671875,2.635986328119543-.33856201171875,0-.67181396484375-.021362304689319-1-.0595703125","key":"2"}),
    createElement(Path, {"d":"M17,4.517578125c2.41143798828125,1.61474609375,4,4.362548828130457,4,7.482421875,0,.908813476560681-.1375732421875,1.784912109380457-.3880615234375,2.611938476560681","key":"3"}),
    createElement(Path, {"d":"M7.000000000352884,15.99999999927968l.000000000807631,3.99999999991087-4,.00000000080945","key":"4"}),
    createElement(Path, {"d":"M5.636047363514081,5.635986327220962c1.628723144382093-1.628662109520519,3.878662109134893-2.635986328481522,6.363952636478643-2.635986328699801.33856201171875-.000000000030923.671813964847388.021362304629292,1.000000000007276.059570312409051","key":"5"}),
    createElement(Path, {"d":"M7.000000001473381,19.482421873968633c-2.411437988426769-1.614746093528083-4.000000000389264-4.362548827768478-4.000000000669388-7.48242187463984-.000000000083674-.908813476558862.137573242027429-1.784912109388642.388061523201031-2.61193847659888","key":"6"})
  );
});

ArrowSyncCounterclockwiseOffAngular.displayName = 'ArrowSyncCounterclockwiseOffAngular';

module.exports = ArrowSyncCounterclockwiseOffAngular;
module.exports.ArrowSyncCounterclockwiseOffAngular = ArrowSyncCounterclockwiseOffAngular;
module.exports.default = ArrowSyncCounterclockwiseOffAngular;
