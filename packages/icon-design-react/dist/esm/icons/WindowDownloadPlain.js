import { createElement, forwardRef } from 'react';

const WindowDownloadPlain = forwardRef(function WindowDownloadPlain(
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
    createElement('path', {"d":"M11.999999993611709,21.998779299956368H3.9999999935917c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v8","key":"0"}),
    createElement('line', {"x1":"1.9999999935917","y1":"7.998779299956368","x2":"21.9999999935917","y2":"7.998779299956368","key":"1"}),
    createElement('polyline', {"points":"21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368","key":"2"}),
    createElement('line', {"x1":"18.999999993611709","y1":"14.998779299956368","x2":"18.999999993611709","y2":"21.998779299956368","key":"3"})
  );
});

WindowDownloadPlain.displayName = 'WindowDownloadPlain';

export default WindowDownloadPlain;
export { WindowDownloadPlain };
