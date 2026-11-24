'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const ClipboardListMinus = forwardRef(function ClipboardListMinus(
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
    createElement(Line, {"x1":"21.974731440099276","y1":"19.000000003885361","x2":"15.974731440099276","y2":"19.000000003885361","key":"0"}),
    createElement(Path, {"d":"M12.974731440099276,22.000000003885361H4.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500340808-2,2-2h2","key":"1"}),
    createElement(Path, {"d":"M16.974731440099276,4.000000003885361h2c1.104569499670106,0,2,.895430500338989,2,2v8","key":"2"}),
    createElement(Rect, {"x":"6.974731440099276","y":"2.000000003885361","width":"10","height":"4","rx":"1.118033988748721","ry":"1.118033988748721","key":"3"}),
    createElement(Line, {"x1":"6.984731440099495","y1":"10.000000003885361","x2":"6.974731440099276","y2":"10.000000003885361","key":"4"}),
    createElement(Line, {"x1":"6.984731440099495","y1":"14.000000003888999","x2":"6.974731440099276","y2":"14.000000003888999","key":"5"}),
    createElement(Line, {"x1":"10.974731440099276","y1":"10.000000003885361","x2":"16.974731440099276","y2":"10.000000003885361","key":"6"}),
    createElement(Line, {"x1":"10.974731440099276","y1":"14.000000003888999","x2":"16.974731440099276","y2":"14.000000003888999","key":"7"}),
    createElement(Line, {"x1":"6.984731440099495","y1":"18.000000003888999","x2":"6.974731440099276","y2":"18.000000003888999","key":"8"}),
    createElement(Line, {"x1":"10.974731440099276","y1":"18.000000003888999","x2":"11.974731440099276","y2":"18.000000003888999","key":"9"})
  );
});

ClipboardListMinus.displayName = 'ClipboardListMinus';

module.exports = ClipboardListMinus;
module.exports.ClipboardListMinus = ClipboardListMinus;
module.exports.default = ClipboardListMinus;
