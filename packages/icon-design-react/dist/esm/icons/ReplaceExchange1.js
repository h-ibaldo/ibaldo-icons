import { forwardRef } from 'react';

const ReplaceExchange1 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <polyline points="21.679561208527957 10.41638982463337 19.558240865013431 12.537710168242484 17.436920521407956 10.416389824727958" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.123212022582265,17.487457636849285c1.785505044258571,1.785505044175807,4.204531843924997,2.546041890927881,6.53335764426447,2.290716956948017" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.747317696577738,12.3486333366709c.143674223250855-2.21665718924487-.61621524801194-4.480702271885093-2.31039717526437-6.174884199062944" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.049967948266385 13.41421356234423 4.171288291967358 11.292893218927929 6.292608635386387 13.41421356263163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.606317134841447,6.343145751528937c-1.785505044093952-1.785505044339516-4.204531843696714-2.546041891306231-6.533357644057105-2.290716957533732" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.982211460388498,11.481970050481323c-.143674223452763,2.216657189233956.616215247609944,4.480702271943301,2.310397174708669,6.174884199270309" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.949462885142566" y="16.000000000480213" width="6" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885142566" y="2.000000000480213" width="6" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ReplaceExchange1.displayName = 'ReplaceExchange1';

export default ReplaceExchange1;
export { ReplaceExchange1 };
