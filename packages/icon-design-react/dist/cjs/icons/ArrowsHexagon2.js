'use strict';

const { createElement, forwardRef } = require('react');

const ArrowsHexagon2 = forwardRef(function ArrowsHexagon2(
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
    createElement('polyline', {"points":"22 11 19.99999999981992 12.999999999818101 18 10.999999999648935","key":"0"}),
    createElement('path', {"d":"M20.00000000027012,12.999999999199645v-4.000076293950769c0-.629514606669545-.296388314670367-1.222291235998455-.800000000000182-1.599999999999454l-5.999967575099618-4.499975681320393c-.711112919550033-.533334689669573-1.688893590830048-.533333197699903-2.400004882780195.000003662089512l-5.800027542120006,4.350048313181105","key":"1"}),
    createElement('polyline', {"points":"2.00000000036016 12.999999998210114 4.00000000072032 10.999999998568455 6.00000000036016 12.99999999891952","key":"2"}),
    createElement('path', {"d":"M4.00000000027012,10.999999999199645l-.00000000036016,4.000076293938037c-.000000000060027.629514606671364.296388314560318,1.222291236030287.79999999986012,1.600000000071304l5.999967574689435,4.499975681859723c.71111291950001.5333346897296,1.688893590780935.533333197849061,2.400004882780195-.000003661869414l5.800027542510179-4.350048312660874","key":"3"})
  );
});

ArrowsHexagon2.displayName = 'ArrowsHexagon2';

module.exports = ArrowsHexagon2;
module.exports.ArrowsHexagon2 = ArrowsHexagon2;
module.exports.default = ArrowsHexagon2;
