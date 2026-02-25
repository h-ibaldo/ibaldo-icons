import { forwardRef } from 'react';

const Cloud3Minus22 = forwardRef(({
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
    <path d="M16.977172851560681,13.048095676607772c-.2303466796875-2.82556152341931-2.59222412109375-5.048095703110448-5.4771728515625-5.048095703110448s-5.246826171875,2.222534179691138-5.4771728515625,5.048095703110448c-2.25775146484375.24133300783069-4.0228271484375,2.130065917979664-4.0228271484375,4.451904296889552,0,2.485290527340112,2.01470947265625,4.5,4.5,4.5h10c2.48529052734375,0,4.5-2.014709472659888,4.5-4.5,0-2.321838378909888-1.76507568359375-4.210571289058862-4.0228271484375-4.451904296889552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.999999999998181" y1="3.999999973497324" x2="21.999999999998181" y2="3.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud3Minus22.displayName = 'Cloud3Minus22';

export default Cloud3Minus22;
export { Cloud3Minus22 };
