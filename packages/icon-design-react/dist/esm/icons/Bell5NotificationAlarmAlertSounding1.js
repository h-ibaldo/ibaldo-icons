import { forwardRef } from 'react';

const Bell5NotificationAlarmAlertSounding1 = forwardRef(({
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
    <line x1="9.974731449499814" y1="21.000000000480213" x2="13.974731449499814" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.974731449499814" y1="17.000000000480213" x2="4.974731449499814" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.974731449499814,17.000000000480213v-8.000005000012607c0-2.761420987728343-2.23857401225996-4.999994999987393-4.999994999990122-4.999994999987393h-.000009999999747c-2.761420987720157,0-4.999994999980117,2.238574012259051-4.999994999990122,4.999994999969203l-.000000000020009,8.000005000030797" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731449499814" y1="9.000000000480213" x2="3.974731449499814" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.974731449549836" y1="4.000000000480213" x2="2.974731449499814" y2="3.000000000571163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.974731449499814" y1="9.000000000480213" x2="21.974731449499814" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.974731449499814" y1="4.000000000480213" x2="20.974731449499814" y2="3.000000000429281" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.974731449589854" y1="4.000000000440195" x2="2.974731449499814" y2="3.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bell5NotificationAlarmAlertSounding1.displayName = 'Bell5NotificationAlarmAlertSounding1';

export default Bell5NotificationAlarmAlertSounding1;
export { Bell5NotificationAlarmAlertSounding1 };
