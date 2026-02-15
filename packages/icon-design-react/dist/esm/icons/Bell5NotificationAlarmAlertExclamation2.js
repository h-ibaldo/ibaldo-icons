import { forwardRef } from 'react';

const Bell5NotificationAlarmAlertExclamation2 = forwardRef(({
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
    <line x1="19.974731449503452" y1="17.000000000480213" x2="3.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.974731449503452,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814723412-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185275467,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v8.000006000002031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449503452" y1="21.000000000480213" x2="13.974731449503452" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449503452" y1="13.010000000480431" x2="11.974731449503452" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449503452" y1="10.000000000480213" x2="11.974731449503452" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bell5NotificationAlarmAlertExclamation2.displayName = 'Bell5NotificationAlarmAlertExclamation2';

export default Bell5NotificationAlarmAlertExclamation2;
export { Bell5NotificationAlarmAlertExclamation2 };
