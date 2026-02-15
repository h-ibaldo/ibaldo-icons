import { forwardRef } from 'react';

const ContinuousShootingBurstsRectangles3 = forwardRef(({
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
    <polygon points="9.999999981000656 11.999996563432433 21.999999981000656 7.999996563432433 21.999999981000656 17.999996563432433 9.999999981000656 21.999996563432433 9.999999981000656 11.999996563432433" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.999999981000656 9.333309551713683 17.999999981000656 4.999996563432433 5.999999981000656 8.999996563432433 5.999999981000656 18.999996563432433 9.999999981000656 17.666683575151183" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.999999981000656 6.333309551713683 13.999999981000656 1.999996563432433 1.999999981000656 5.999996563432433 1.999999981000656 15.999996563432433 5.999999981000656 14.666683575151183" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ContinuousShootingBurstsRectangles3.displayName = 'ContinuousShootingBurstsRectangles3';

export default ContinuousShootingBurstsRectangles3;
export { ContinuousShootingBurstsRectangles3 };
