'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Rect } = RNSvg;

const NewspaperTornWide = forwardRef(function NewspaperTornWide(
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
    createElement(Polygon, {"points":"21.999988083716744 21.936828613277612 1.999988083716744 21.936828613277612 1.999988083716744 1.936828613277612 3.999988083716744 2.936828613277612 5.999988083716744 1.936828613277612 7.999988083716744 2.936828613277612 9.999988083716744 1.936828613277612 11.999988083716744 2.936828613277612 13.999991219036019 1.936828613277612 15.999988017745636 2.936828613277612 17.999988050734828 1.936828613277612 19.999988017745636 2.936828613277612 21.999988017745636 1.936828613277612 21.999988083716744 21.936828613277612","key":"0"}),
    createElement(Rect, {"x":"5.999988017745636","y":"6.936828613277612","width":"12","height":"3","key":"1"}),
    createElement(Line, {"x1":"13.999988017745636","y1":"13.936828613277612","x2":"17.999988017745636","y2":"13.936828613277612","key":"2"}),
    createElement(Line, {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"9.999988017745636","y2":"13.936828613277612","key":"3"}),
    createElement(Line, {"x1":"13.999988017745636","y1":"17.936828613277612","x2":"17.999988017745636","y2":"17.936828613277612","key":"4"}),
    createElement(Line, {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"9.999988017745636","y2":"17.936828613277612","key":"5"})
  );
});

NewspaperTornWide.displayName = 'NewspaperTornWide';

module.exports = NewspaperTornWide;
module.exports.NewspaperTornWide = NewspaperTornWide;
module.exports.default = NewspaperTornWide;
