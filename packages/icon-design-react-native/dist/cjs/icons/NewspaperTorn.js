'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const NewspaperTorn = forwardRef(function NewspaperTorn(
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
    createElement(Path, {"d":"M17.999988017745636,17.936828613277612l-.000000032989192-16-2.000000032981916,1-1.999996798709617-1-2.000003135319275,1-2-1-2,1-2-1-2,1L1.999988017745636,1.936828613277612v17c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3V6.936828613277612","key":"0"}),
    createElement(Rect, {"x":"5.999988017745636","y":"6.936828613277612","width":"8","height":"3","key":"1"}),
    createElement(Line, {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"13.999988017745636","y2":"13.936828613277612","key":"2"}),
    createElement(Line, {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"13.999988017745636","y2":"17.936828613277612","key":"3"})
  );
});

NewspaperTorn.displayName = 'NewspaperTorn';

module.exports = NewspaperTorn;
module.exports.NewspaperTorn = NewspaperTorn;
module.exports.default = NewspaperTorn;
