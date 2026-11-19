'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BrowserTriangle = forwardRef(function BrowserTriangle(
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
    createElement(Path, {"d":"M22.025268540026445,12.998779300212846V3.998779300212846c0-1.104569499661011-.895430500340808-2-2-2H4.025268540026445c-1.104569499661011,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500338989,2,2,2h4.974731445068755","key":"0"}),
    createElement(Line, {"x1":"5.035268543655548","y1":"4.998779300212846","x2":"5.025268543655329","y2":"4.998779300212846","key":"1"}),
    createElement(Line, {"x1":"8.035268543655548","y1":"4.998779300212846","x2":"8.025268543655329","y2":"4.998779300212846","key":"2"}),
    createElement(Line, {"x1":"19.025268543655329","y1":"4.998779300212846","x2":"11.025268543655329","y2":"4.998779300212846","key":"3"}),
    createElement(Line, {"x1":"2.025268543655329","y1":"7.998779300212846","x2":"22.025268543655329","y2":"7.998779300212846","key":"4"}),
    createElement(Path, {"d":"M13.649285554956805,21.998779300212846h6.701428860278611c1.165941712941276,0,1.886111450890894-1.271956862001389,1.2862393887699-2.271743632794823l-3.350714429328946-5.58452405227581c-.582605093321035-.971008489450469-1.989873683569385-.971008489294036-2.572478777130527,0l-3.350714431158849,5.584524051930202c-.59987206247024.999786770789797.120297675448455,2.271743633140431,1.286239388569811,2.271743633140431Z","key":"5"})
  );
});

BrowserTriangle.displayName = 'BrowserTriangle';

module.exports = BrowserTriangle;
module.exports.BrowserTriangle = BrowserTriangle;
module.exports.default = BrowserTriangle;
