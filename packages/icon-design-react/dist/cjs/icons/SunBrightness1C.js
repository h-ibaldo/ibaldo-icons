'use strict';

const { createElement, forwardRef } = require('react');

const SunBrightness1C = forwardRef(function SunBrightness1C(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('circle', {"cx":"12","cy":"12.000000005924448","r":"4","key":"0"}),
    createElement('line', {"x1":"12","y1":"21.99000000592423","x2":"12","y2":"22.000000005924448","key":"1"}),
    createElement('line', {"x1":"12","y1":"2.010000005924667","x2":"12","y2":"2.000000005924448","key":"2"}),
    createElement('line', {"x1":"2.010000000000218","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"3"}),
    createElement('line', {"x1":"21.989999999999782","y1":"12.000000005924448","x2":"22","y2":"12.000000005924448","key":"4"}),
    createElement('line', {"x1":"16.999999999870852","y1":"20.650254043843233","x2":"16.999999999870852","y2":"20.660254043843452","key":"5"}),
    createElement('line', {"x1":"7.000000000129148","y1":"3.349745968005664","x2":"7.000000000129148","y2":"3.339745968005445","key":"6"}),
    createElement('line', {"x1":"3.349745962081215","y1":"17.0000000057953","x2":"3.339745962080997","y2":"17.0000000057953","key":"7"}),
    createElement('line', {"x1":"20.650254037920604","y1":"7.000000006053597","x2":"20.660254037920822","y2":"7.000000006053597","key":"8"}),
    createElement('line', {"x1":"20.650254037696868","y1":"17.000000006184564","x2":"20.660254037697086","y2":"17.000000006184564","key":"9"}),
    createElement('line', {"x1":"3.34974596230677","y1":"7.000000005666152","x2":"3.339745962306552","y2":"7.000000005666152","key":"10"}),
    createElement('line', {"x1":"6.999999999741704","y1":"20.650254043619498","x2":"6.999999999741704","y2":"20.660254043619716","key":"11"}),
    createElement('line', {"x1":"17.000000000260115","y1":"3.349745968229399","x2":"17.000000000260115","y2":"3.339745968229181","key":"12"})
  );
});

SunBrightness1C.displayName = 'SunBrightness1C';

module.exports = SunBrightness1C;
module.exports.SunBrightness1C = SunBrightness1C;
module.exports.default = SunBrightness1C;
