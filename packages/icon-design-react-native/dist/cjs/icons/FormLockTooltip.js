'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const FormLockTooltip = forwardRef(function FormLockTooltip(
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
    createElement(Rect, {"x":"7","y":"12","width":"7","height":"4","key":"0"}),
    createElement(Path, {"d":"M8.000000011179509,12l-.000000020960215-1.500002460183168c-.000000019288564-1.380710502868169,1.119286988059685-2.499997526891093,2.499997490920578-2.499997528178938h.000004999999874c1.380710500139685-.000000001287844,2.499997508441083,1.119287016386806,2.499997495589923,2.499997516526491l-.000000013958925,1.500002471835614","key":"1"}),
    createElement(Path, {"d":"M17,21H4c-1.104569499661011,0-2-.895430500338989-2-2V5c0-1.104569499661011.895430500338989-2,2-2h13c1.104569499661011,0,2,.895430500338989,2,2v3.585786437626666c0,.265216489839077.105356840369495.519570402739191.292893218809695.707106781185757l2.707106781190305,2.707106781187576-2.707106781190305,2.707106781189395c-.1875363784402.187536378444747-.292893218809695.441890291344862-.292893218809695.707106781183938v3.585786437626666c0,1.104569499661011-.895430500338989,2-2,2Z","key":"2"})
  );
});

FormLockTooltip.displayName = 'FormLockTooltip';

module.exports = FormLockTooltip;
module.exports.FormLockTooltip = FormLockTooltip;
module.exports.default = FormLockTooltip;
