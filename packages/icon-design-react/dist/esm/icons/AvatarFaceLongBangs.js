import { createElement, forwardRef } from 'react';

const AvatarFaceLongBangs = forwardRef(function AvatarFaceLongBangs(
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
    createElement('line', {"x1":"9.236065740829872","y1":"14.999999999998181","x2":"9.236065740829872","y2":"13.999999999998181","key":"0"}),
    createElement('line', {"x1":"15.236065740829872","y1":"14.999999999998181","x2":"15.236065740829872","y2":"13.999999999998181","key":"1"}),
    createElement('line', {"x1":"5.236065740829872","y1":"21.999999999998181","x2":"2.236065740829872","y2":"21.999999999998181","key":"2"}),
    createElement('line', {"x1":"22.236065740829872","y1":"21.999999999998181","x2":"19.236065740829872","y2":"21.999999999998181","key":"3"}),
    createElement('path', {"d":"M18.236065740829872,11.999999999998181v-.000001999998858c0-1.104568388791449-.895429604910532-1.999998000001142-1.999997999999323-1.999998000001142h-8.000003999999535c-1.10456839509061,0-1.999998000001142.895429611209693-1.999998000001142,1.999998000001142v.000001999998858","key":"4"}),
    createElement('path', {"d":"M22.23606574130099,21.999999999998181v-10.000009999999747c0-5.522841975460324-4.477147936820984-9.999990000000253-9.999990000000253-9.999990000000253h-.000009999999747","key":"5"}),
    createElement('path', {"d":"M2.236065741750281,22.000000000218279l-.00000000044929-10.000009999999747c-.000000000251021-5.52284197544941,4.477147936369875-9.999990000200341,9.999989999549143-9.999990000440448h.000009999999747","key":"6"}),
    createElement('path', {"d":"M6.326031561609852,16.999999999998181c.476928710941138,2.836608886720569,2.937866210941138,5,5.910034179691138,5s5.43310546875-2.163391113279431,5.910034179689319-5","key":"7"})
  );
});

AvatarFaceLongBangs.displayName = 'AvatarFaceLongBangs';

export default AvatarFaceLongBangs;
export { AvatarFaceLongBangs };
