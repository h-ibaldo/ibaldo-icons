import { forwardRef } from 'react';

const ContinuousShootingBurstsRectangles12 = forwardRef(({
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
    <polyline points="21.99999999981992 8.999999999012289 22 20.999999999012289 8 20.99999999919055" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.99999999945976 5.999999998386556 18.99999999963984 17.999999998382918 4.99999999963984 17.999999998561179" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000002654815" y="2.999999998606654" width="14.00000000027012" height="11.999999999641659" transform="translate(18.000000005554021 17.999999996880696) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ContinuousShootingBurstsRectangles12.displayName = 'ContinuousShootingBurstsRectangles12';

export default ContinuousShootingBurstsRectangles12;
export { ContinuousShootingBurstsRectangles12 };
