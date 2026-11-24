'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const PuzzleGrid = forwardRef(function PuzzleGrid(
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
    createElement(Path, {"d":"M12,1.999999999998181v3.27734375c.295166015621362-.171752929689319.6337890625-.27734375,1-.27734375,1.104614257808862,0,2,.8955078125,2,2s-.895385742191138,2-2,2c-.3662109375,0-.704833984378638-.105590820309772-1-.27734375v3.27734375h3.27734375c-.171752929691138.295166015619543-.27734375.6337890625-.27734375,1,0,1.1044921875.8955078125,2,2,2,1.104614257808862,0,2-.8955078125,2-2,0-.3662109375-.105590820308862-.704833984380457-.27734375-1h3.27734375","key":"0"}),
    createElement(Path, {"d":"M12,21.999999999998181v-3.27734375c-.295166015628638.171752929689319-.6337890625.27734375-1,.27734375-1.104614257808862,0-2-.8955078125-2-2s.895385742191138-2,2-2c.3662109375,0,.704833984371362.105590820310681,1,.27734375v-3.27734375h-3.27734375c.171752929691138-.295166015630457.27734375-.6337890625.27734375-1,0-1.1044921875-.8955078125-2-2-2-1.104614257808862,0-2,.8955078125-2,2,0,.3662109375.105590820308862.704833984369543.27734375,1h-3.27734375","key":"1"}),
    createElement(Rect, {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"2","ry":"2","key":"2"})
  );
});

PuzzleGrid.displayName = 'PuzzleGrid';

module.exports = PuzzleGrid;
module.exports.PuzzleGrid = PuzzleGrid;
module.exports.default = PuzzleGrid;
