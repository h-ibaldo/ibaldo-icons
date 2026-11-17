'use strict';

const { createElement, forwardRef } = require('react');

const TechnicalSupportLaptopGear22 = forwardRef(function TechnicalSupportLaptopGear22(
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
    createElement('g', {"key":"0"},
      createElement('circle', {"cx":"16.999999999461579","cy":"7.032754075942648","r":"3.5","key":"0"}),
      createElement('line', {"x1":"16.999999999461579","y1":"7.042754075942867","x2":"16.999999999461579","y2":"7.032754075942648","key":"1"}),
      createElement('line', {"x1":"16.999999999461579","y1":"2.032754075942648","x2":"16.999999999461579","y2":"3.532754075942648","key":"2"}),
      createElement('line', {"x1":"16.999999999461579","y1":"10.532754075942648","x2":"16.999999999461579","y2":"12.032754075942648","key":"3"}),
      createElement('line', {"x1":"21.999999999461579","y1":"7.032754075942648","x2":"20.499999999461579","y2":"7.032754075942648","key":"4"}),
      createElement('line', {"x1":"13.499999999461579","y1":"7.032754075942648","x2":"11.999999999461579","y2":"7.032754075942648","key":"5"}),
      createElement('line', {"x1":"20.53553390547313","y1":"10.568287981794128","x2":"19.474873733670393","y2":"9.507627810042322","key":"6"}),
      createElement('line', {"x1":"14.525126265252766","y1":"4.557880341842974","x2":"13.464466093450028","y2":"3.497220170083892","key":"7"}),
      createElement('line', {"x1":"13.464466093610099","y1":"10.568287981954199","x2":"14.525126265365543","y2":"9.5076278101551","key":"8"}),
      createElement('line', {"x1":"19.474873733561253","y1":"4.557880341733835","x2":"20.535533905316697","y2":"3.497220169934735","key":"9"})),
    createElement('path', {"d":"M8.999999999461579,7.032754075942648h-4c-.552284749828686,0-1,.447715250171314-1,1v9c0,.552284749832324.447715250171314,1,1,1h14c.552284749832324,0,1-.447715250167676,1-1v-3","key":"1"}),
    createElement('line', {"x1":"1.999999999461579","y1":"22.032754075942648","x2":"21.999999999461579","y2":"22.032754075942648","key":"2"})
  );
});

TechnicalSupportLaptopGear22.displayName = 'TechnicalSupportLaptopGear22';

module.exports = TechnicalSupportLaptopGear22;
module.exports.TechnicalSupportLaptopGear22 = TechnicalSupportLaptopGear22;
module.exports.default = TechnicalSupportLaptopGear22;
