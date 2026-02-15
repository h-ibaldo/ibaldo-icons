import { forwardRef } from 'react';

const Bell5NotificationAlarmAlertClock2 = forwardRef(({
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
    <line x1="18.974731449501633" y1="17.000000000480213" x2="2.974731449501633" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731449501633" y1="21.000000000480213" x2="12.974731449501633" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.974731447075101" cy="6.999999998052772" r="4.999999997575742" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.398376469032883,3.513916016108851c-.74169921875-.328125-1.5604248046875-.513916015628638-2.42364501953125-.513916015628638-3.313720703125,0-6,2.686279296878638-6,6v8h12v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.974731449501633 5.000000000480213 16.974731449501633 7.000000000480213 18.974731449501633 7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bell5NotificationAlarmAlertClock2.displayName = 'Bell5NotificationAlarmAlertClock2';

export default Bell5NotificationAlarmAlertClock2;
export { Bell5NotificationAlarmAlertClock2 };
