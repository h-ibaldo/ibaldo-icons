import { createElement, forwardRef } from 'react';

const WindowKeyDot = forwardRef(function WindowKeyDot(
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
    createElement('path', {"d":"M22.000000000184627,8.000000000448381v-4c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h2","key":"0"}),
    createElement('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"14.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement('path', {"d":"M18.000000000184627,10.000000000448381c-2.20916748046875,0-4,1.79083251953125-4,4,0,.307739257813409.042114257811591.60430908203125.10791015625.89208984375l-4.10791015625,4.10791015625v3h3v-2h2v-2h3c2.20916748046875,0,4-1.79083251953125,4-4s-1.79083251953125-4-4-4Z","key":"2"}),
    createElement('line', {"x1":"18.500000000184627","y1":"13.51000000044678","x2":"18.500000000184627","y2":"13.500000000446562","key":"3"}),
    createElement('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"6"})
  );
});

WindowKeyDot.displayName = 'WindowKeyDot';

export default WindowKeyDot;
export { WindowKeyDot };
