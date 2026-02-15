import { forwardRef } from 'react';

const Bell4NotificationAlarmAlertClock2 = forwardRef(({
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
    <path d="M11.974731449501633,18.000000000480213v2.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000001354c-1.10456839509061,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-2.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731449501633" y1="18.000000000480213" x2="1.974731449501633" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449501633" y1="3.000000000480213" x2="9.974731449501633" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.974731447075101" cy="7.999999998052772" r="4.999999997575742" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.606323246376633,5.614135742667713c-.79541015625-.3895263671875-1.68621826171875-.6141357421875-2.631591796875-.6141357421875-3.313720703125,0-6,2.686279296878638-6,6v7h12v-5.100830078121362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.974731449501633 6.000000000480213 16.974731449501633 8.000000000480213 18.974731449501633 8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bell4NotificationAlarmAlertClock2.displayName = 'Bell4NotificationAlarmAlertClock2';

export default Bell4NotificationAlarmAlertClock2;
export { Bell4NotificationAlarmAlertClock2 };
