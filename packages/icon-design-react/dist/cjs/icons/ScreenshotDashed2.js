'use strict';

const { createElement, forwardRef } = require('react');

const ScreenshotDashed2 = forwardRef(function ScreenshotDashed2(
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
    createElement('path', {"d":"M2.016630450970297,4.000000000480213v-1c0-.552284749832324.447715250169495-1,1-1h1","key":"0"}),
    createElement('line', {"x1":"14.016630450970297","y1":"2.000000000502041","x2":"13.016630450970297","y2":"2.000000000502041","key":"1"}),
    createElement('line', {"x1":"9.016630450970297","y1":"2.000000000502041","x2":"8.016630450990306","y2":"2.000000000502041","key":"2"}),
    createElement('line', {"x1":"14.016630450970297","y1":"20.000000000480213","x2":"13.016630450970297","y2":"20.000000000480213","key":"3"}),
    createElement('line', {"x1":"9.016630450970297","y1":"20.000000000480213","x2":"8.016630450990306","y2":"20.000000000480213","key":"4"}),
    createElement('path', {"d":"M4.016630450970297,20.000000000480213l-1-.000000000047294c-.552284749830505-.000000000025466-.999999999979991-.447715250214969-.999999999949978-1.000000000043656l.000000000040018-1","key":"5"}),
    createElement('line', {"x1":"2.016630451529636","y1":"8.000000000389264","x2":"2.016630451489618","y2":"9.000000000389264","key":"6"}),
    createElement('line', {"x1":"2.016630451308629","y1":"13.000000000389264","x2":"2.016630451260426","y2":"14.000000000367436","key":"7"}),
    createElement('line', {"x1":"20.016630450970297","y1":"8.000000000389264","x2":"20.016630450920275","y2":"9.000000000389264","key":"8"}),
    createElement('line', {"x1":"20.016630450740195","y1":"13.000000000389264","x2":"20.016630450700177","y2":"14.000000000367436","key":"9"}),
    createElement('path', {"d":"M18.016630451020319,2.000000000476575l1,.000000000047294c.552284749829596.000000000025466.999999999979991.447715250214969.999999999949978,1.000000000043656l-.000000000040018,1","key":"10"}),
    createElement('line', {"x1":"20.016630450970297","y1":"18.000000000480213","x2":"20.016630450970297","y2":"22.000000000480213","key":"11"}),
    createElement('line', {"x1":"22.016630450970297","y1":"20.000000000480213","x2":"18.016630450970297","y2":"20.000000000480213","key":"12"}),
    createElement('rect', {"x":"6.016630450970297","y":"6.000000000480213","width":"10","height":"10","key":"13"})
  );
});

ScreenshotDashed2.displayName = 'ScreenshotDashed2';

module.exports = ScreenshotDashed2;
module.exports.ScreenshotDashed2 = ScreenshotDashed2;
module.exports.default = ScreenshotDashed2;
