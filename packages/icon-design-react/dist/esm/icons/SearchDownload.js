import { createElement, forwardRef } from 'react';

const SearchDownload = forwardRef(function SearchDownload(
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
    createElement('line', {"x1":"17.313415521859497","y1":"17.363952637198963","x2":"21.949462885140747","y2":"22.000000000480213","key":"0"}),
    createElement('polyline', {"points":"7.949462885140747 10.000000000480213 10.949462885140747 13.000000000476575 13.949462885140747 10.000000000480213","key":"1"}),
    createElement('path', {"d":"M6.949462885140747,2.946594238761463C3.997846996489898,4.415678615183424,1.962060116589782,7.449460917221586,1.949531303880576,10.967311523389071c-.017099105330999,4.801101230117638,3.922990012559239,8.883910415715945,8.721944095999788,9.028496397902927,5.097467736019098.153579793943209,9.277987485260383-3.932949824182288,9.277987485260383-8.995807920811785,0-4.081767939409474-2.717219508580456-7.52886768495955-6.441498064601547-8.631138775512227-1.276756738379845-.377880446161726-2.558501935398453.596104277825361-2.558501935398453,1.927607714020269v8.703531061491958","key":"2"})
  );
});

SearchDownload.displayName = 'SearchDownload';

export default SearchDownload;
export { SearchDownload };
