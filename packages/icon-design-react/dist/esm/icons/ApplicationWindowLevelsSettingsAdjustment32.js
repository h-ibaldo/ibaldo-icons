import { forwardRef } from 'react';

const ApplicationWindowLevelsSettingsAdjustment32 = forwardRef(({
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
    <rect x="1.999999993990059" y="1.998779299956368" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993990059" y1="7.998779299956368" x2="21.999999993990059" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999994000973" y1="11.998779299956368" x2="6.999999994000973" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999994000973" y1="11.998779299956368" x2="11.999999994000973" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999994000973" y1="11.998779299956368" x2="16.999999994000973" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999994000973" y1="13.998779299956368" x2="7.999999994000973" y2="13.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.999999994000973" y1="15.998779299956368" x2="12.999999994000973" y2="15.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.999999993640813" y1="13.998779299956368" x2="17.999999993640813" y2="13.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindowLevelsSettingsAdjustment32.displayName = 'ApplicationWindowLevelsSettingsAdjustment32';

export default ApplicationWindowLevelsSettingsAdjustment32;
export { ApplicationWindowLevelsSettingsAdjustment32 };
