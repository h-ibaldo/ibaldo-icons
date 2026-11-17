import { createElement, forwardRef } from 'react';

const UploadArrowDashedProgress2 = forwardRef(function UploadArrowDashedProgress2(
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
    createElement('path', {"d":"M7.182678227370161,20.645751953587933c1.423095703128638.778625488279431,3.055480957038526,1.222473144529431,4.792053222660797,1.222473144529431,1.945922851558862,0,3.755920410158978-.564697265625,5.292114257808862-1.526245117186591","key":"0"}),
    createElement('path', {"d":"M2.006042485189937,12.487670898898614c.11785888671875,1.91778564453125.770751953117724,3.68731689453125,1.819152832028522,5.162353515625","key":"1"}),
    createElement('path', {"d":"M20.448486332839821,17.160339355929864c.961547851568866-1.53619384765625,1.526245117191138-3.34619140625,1.526245117191138-5.2921142578125,0-4.74798583984375-3.312377929691138-8.7144775390625-7.75-9.7364501953125","key":"2"}),
    createElement('path', {"d":"M9.724731450030959,2.131774902804864c-.573608398441138.132080078125-1.131286621091022.30584716796875-1.662475585941138.53192138671875","key":"3"}),
    createElement('path', {"d":"M4.429687504718459,5.318603516087023c-.701843261719659.807739257811591-1.279724121098297,1.724792480467841-1.6953125,2.728637695311591","key":"4"}),
    createElement('polyline', {"points":"8.990386967609084 11.000000000462023 11.990386968283929 8.000000000462023 14.990386967609084 11.000000000462023","key":"5"}),
    createElement('line', {"x1":"11.990386966531332","y1":"16.000000000462023","x2":"11.990386968283929","y2":"8.000000000462023","key":"6"})
  );
});

UploadArrowDashedProgress2.displayName = 'UploadArrowDashedProgress2';

export default UploadArrowDashedProgress2;
export { UploadArrowDashedProgress2 };
