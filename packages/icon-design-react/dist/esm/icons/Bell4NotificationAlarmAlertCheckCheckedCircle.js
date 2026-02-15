import { forwardRef } from 'react';

const Bell4NotificationAlarmAlertCheckCheckedCircle = forwardRef(({
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
    <path d="M12.000000004469257,17.000000003885361v2.000002000000677c0,1.10456839509061-.895429604919627,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000010449c-1.104568395088791,0-1.999997999990228-.895429604908713-1.999997999990228-1.999997999999323v-2.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.000000004469257" y1="17.000000003885361" x2="2.000000004469257" y2="17.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.000000004469257" y1="2.000000003885361" x2="10.000000004469257" y2="4.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.50000000688442" cy="7.50000000145792" r="5.499999997576424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000000004469257" y1="17.000000003885361" x2="16.000000004469257" y2="12.974853519517637" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.997070316969257,4.347656253885361c-.625549316409888-.22119140625-1.295776367200233-.34765625-1.9970703125-.34765625-3.313720703128638,0-6,2.686279296882276-6,6v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.500000006899427,7.172000064867461l.689762140340463,1.379524280710029c.152624547199594.305249094388273.559446388109791.371267190839717.800766986099916.129946592838678l2.509470873559621-2.509470873548707" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bell4NotificationAlarmAlertCheckCheckedCircle.displayName = 'Bell4NotificationAlarmAlertCheckCheckedCircle';

export default Bell4NotificationAlarmAlertCheckCheckedCircle;
export { Bell4NotificationAlarmAlertCheckCheckedCircle };
