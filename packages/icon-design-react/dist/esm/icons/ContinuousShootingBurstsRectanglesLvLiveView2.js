import { forwardRef } from 'react';

const ContinuousShootingBurstsRectanglesLvLiveView2 = forwardRef(({
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
    <polyline points="22.000000000090949 9.000000000896762 21.99999999919055 21.000000000896762 7.99999999919055 20.99999999981992" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19 6.000000000001819 18.9999999990996 17.999999999998181 4.9999999990996 17.999999998921339" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.000000003439709 12.999999999998181 2.000000002399247 14.999999998321073 16.000000002659363 14.999999999612555 16 2.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.999999999869033 3.000000000067303 2.000000000140062 9.000000000067303 5.000000000130967 8.999999999932697" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7 2.999999999998181 9.000000003050445 8.999999999790816 11 2.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ContinuousShootingBurstsRectanglesLvLiveView2.displayName = 'ContinuousShootingBurstsRectanglesLvLiveView2';

export default ContinuousShootingBurstsRectanglesLvLiveView2;
export { ContinuousShootingBurstsRectanglesLvLiveView2 };
