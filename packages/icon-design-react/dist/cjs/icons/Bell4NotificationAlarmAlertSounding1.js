"use strict";

const { forwardRef } = require('react');

const Bell4NotificationAlarmAlertSounding1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M13.974731449499814,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604909623,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000000445c-1.1045683950897,0-1.999998000000232-.895429604912351-1.999998000000232-1.999997999999323v-2.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.974731449499814" y1="17.000000000480213" x2="4.974731449499814" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.974731449499814,17.000000000480213v-7.000005000012607c0-2.761420987728343-2.23857401225996-4.999994999987393-4.999994999990122-4.999994999987393h-.000009999999747c-2.761420987720157,0-4.999994999980117,2.238574012259051-4.999994999990122,4.999994999969203l-.000000000020009,7.000005000030797" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449499814" y1="3.000000000480213" x2="11.974731449499814" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731449499814" y1="9.000000000480213" x2="3.974731449499814" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.974731449499814" y1="9.000000000480213" x2="21.974731449499814" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.974731449499814" y1="4.000000000480213" x2="20.974731449499814" y2="3.000000000429281" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.974731449589854" y1="4.000000000440195" x2="2.974731449499814" y2="3.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell4NotificationAlarmAlertSounding1.displayName = 'Bell4NotificationAlarmAlertSounding1';

module.exports = Bell4NotificationAlarmAlertSounding1;
module.exports.Bell4NotificationAlarmAlertSounding1 = Bell4NotificationAlarmAlertSounding1;
module.exports.default = Bell4NotificationAlarmAlertSounding1;
