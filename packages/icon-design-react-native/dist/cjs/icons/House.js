'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const House = forwardRef(function House(
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
    createElement(Path, {"d":"M21.789649244099564,12.662305260089852L13.556051117560855,3.680207133342265c-.831365098711103-.906942843332217-2.261178365910382-.906942843332217-3.09254346463058,0L2.229909526380652,12.662305260089852c-.467021824111725.509477847619564-.105605938049848,1.331061658700492.585535915288347,1.331061658700492h2.19433394357111v6.006633082051849c0,.552284749828686.447715250180408,1,1,1h12c.552284749830505,0,1-.447715250171314,1-1v-6.006633082051849h2.194333943580205c.691141853340014,0,1.052557739409167-.821583811080927.585535915279252-1.331061658700492Z","key":"0"})
  );
});

House.displayName = 'House';

module.exports = House;
module.exports.House = House;
module.exports.default = House;
