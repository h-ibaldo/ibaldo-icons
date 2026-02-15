"use strict";

const { forwardRef } = require('react');

const Bell5NotificationAlarmAlertRedDot = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="19.974731449499814" y1="17.000000000480213" x2="3.974731449499814" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449499814" y1="21.000000000480213" x2="13.974731449499814" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.974731449499814" cy="6.000000000480213" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.578918461220383,4.211303711417713c-1.004211425779431-.757080078128638-2.249633789060681-1.2113037109375-3.604187011720569-1.2113037109375-3.313720703119543,0-6,2.686279296878638-6,6v8h12v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell5NotificationAlarmAlertRedDot.displayName = 'Bell5NotificationAlarmAlertRedDot';

module.exports = Bell5NotificationAlarmAlertRedDot;
module.exports.Bell5NotificationAlarmAlertRedDot = Bell5NotificationAlarmAlertRedDot;
module.exports.default = Bell5NotificationAlarmAlertRedDot;
