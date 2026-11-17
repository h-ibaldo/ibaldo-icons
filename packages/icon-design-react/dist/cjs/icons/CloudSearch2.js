'use strict';

const { createElement, forwardRef } = require('react');

const CloudSearch2 = forwardRef(function CloudSearch2(
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
    createElement('circle', {"cx":"11.999999976760591","cy":"16.170349124174209","r":"3.999999999999545","key":"0"}),
    createElement('line', {"x1":"14.828430152410874","y1":"18.998779300083697","x2":"17.999999976489562","y2":"22.170349124444328","key":"1"}),
    createElement('path', {"d":"M18.999999976489562,15.857360842925118c1.722229003900793-.446044921875,3-1.996826171875,3-3.85858154296875,0-2.20916748046875-1.790832519529431-4-4-4h-.025207519529431c.014892578119543-.1649169921875.025207519529431-.3311767578125.025207519529431-.5,0-3.03753662109375-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390625-4.897277832029431,3.00518798828125-.034545898441138-.0006103515625-.068054199220569-.00518798828125-.102722167970569-.00518798828125-3.037536621099207,0-5.5,2.46246337890625-5.5,5.5,0,2.1363525390625,1.220458984369543,3.98394775390625,3,4.894775390625","key":"2"})
  );
});

CloudSearch2.displayName = 'CloudSearch2';

module.exports = CloudSearch2;
module.exports.CloudSearch2 = CloudSearch2;
module.exports.default = CloudSearch2;
