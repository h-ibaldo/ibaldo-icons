'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const BinocularsAngled = forwardRef(function BinocularsAngled(
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
    createElement(Polyline, {"points":"21.999984433450663 21.936828613188482 21.999984433450663 14.936828613188482 17.999984433450663 5.936828613008402 5.999984433450663 5.936828613008402 1.999984433450663 14.936828613188482 1.999984433450663 21.936828613188482","key":"0"}),
    createElement(Line, {"x1":"15.999984433450663","y1":"21.936828613188482","x2":"21.999984433450663","y2":"21.936828613188482","key":"1"}),
    createElement(Path, {"d":"M7.999984433450663,21.936828613188482v-7h1.000000896068741c.552284399891505,0,.999999505111191-.447714704030659,1-.999999103920345l.00000268822987-3.000000896079655h4.000001337390131l-.00000369126974,2.999998769579179c-.00000067953988.552285230340203.447714769659797,1.000001230420821,1,1.000001230420821h.999998769580998v7","key":"2"}),
    createElement(Line, {"x1":"1.999984433450663","y1":"21.936828613188482","x2":"7.999984433450663","y2":"21.936828613188482","key":"3"}),
    createElement(Polyline, {"points":"5.999988018000295 2.936828613008402 5.999988018000295 1.936828613008402 8.999988018000295 1.936828613008402 8.999988018000295 2.936828613008402","key":"4"}),
    createElement(Polyline, {"points":"17.999988017749274 2.936828613008402 17.999988017609212 1.93682861302841 14.999988017609212 1.936828613168473 14.999988017749274 2.936828613148464","key":"5"})
  );
});

BinocularsAngled.displayName = 'BinocularsAngled';

module.exports = BinocularsAngled;
module.exports.BinocularsAngled = BinocularsAngled;
module.exports.default = BinocularsAngled;
