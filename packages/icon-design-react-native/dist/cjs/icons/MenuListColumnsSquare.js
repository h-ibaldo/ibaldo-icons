'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const MenuListColumnsSquare = forwardRef(function MenuListColumnsSquare(
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
    createElement(Line, {"x1":"6.050537043445729","y1":"5.997562036495765","x2":"6.04053704344642","y2":"5.997562036226554","key":"0"}),
    createElement(Line, {"x1":"10.050537043445729","y1":"5.997562036495765","x2":"9.050537043445729","y2":"5.997562036226554","key":"1"}),
    createElement(Line, {"x1":"14.050537043445729","y1":"5.997562036495765","x2":"14.04053704344642","y2":"5.997562036226554","key":"2"}),
    createElement(Line, {"x1":"18.050537043445729","y1":"5.997562036495765","x2":"17.050537043445729","y2":"5.997562036226554","key":"3"}),
    createElement(Line, {"x1":"6.04053704344642","y1":"9.997562036495765","x2":"6.050537043445729","y2":"9.997562036226554","key":"4"}),
    createElement(Line, {"x1":"10.050537043445729","y1":"9.997562036495765","x2":"9.050537043445729","y2":"9.997562036226554","key":"5"}),
    createElement(Line, {"x1":"14.050537043445729","y1":"9.997562036495765","x2":"14.04053704344642","y2":"9.997562036226554","key":"6"}),
    createElement(Line, {"x1":"18.050537043445729","y1":"9.997562036495765","x2":"17.050537043445729","y2":"9.997562036226554","key":"7"}),
    createElement(Line, {"x1":"6.04053704344642","y1":"13.997562036495765","x2":"6.050537043445729","y2":"13.997562036226554","key":"8"}),
    createElement(Line, {"x1":"10.050537043445729","y1":"13.997562036495765","x2":"9.050537043445729","y2":"13.997562036226554","key":"9"}),
    createElement(Line, {"x1":"14.050537043445729","y1":"13.997562036495765","x2":"14.04053704344642","y2":"13.997562036226554","key":"10"}),
    createElement(Line, {"x1":"18.050537043445729","y1":"13.997562036495765","x2":"17.050537043445729","y2":"13.997562036226554","key":"11"}),
    createElement(Line, {"x1":"6.04053704344642","y1":"17.997562036495765","x2":"6.050537043445729","y2":"17.997562036226554","key":"12"}),
    createElement(Line, {"x1":"10.050537043445729","y1":"17.997562036495765","x2":"9.050537043445729","y2":"17.997562036226554","key":"13"}),
    createElement(Line, {"x1":"14.04053704344642","y1":"17.997562036495765","x2":"14.050537043445729","y2":"17.997562036226554","key":"14"}),
    createElement(Line, {"x1":"18.050537043445729","y1":"17.997562036495765","x2":"17.050537043445729","y2":"17.997562036226554","key":"15"}),
    createElement(Rect, {"x":"2.050502318321378","y":"1.997562039977311","width":"20","height":"19.999999992898665","rx":"1.999999999997544","ry":"1.999999999997544","transform":"translate(24.101004636069892 23.995124073428677) rotate(-180)","key":"16"})
  );
});

MenuListColumnsSquare.displayName = 'MenuListColumnsSquare';

module.exports = MenuListColumnsSquare;
module.exports.MenuListColumnsSquare = MenuListColumnsSquare;
module.exports.default = MenuListColumnsSquare;
