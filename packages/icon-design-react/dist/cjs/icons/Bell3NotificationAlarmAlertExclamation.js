"use strict";

const { forwardRef } = require('react');

const Bell3NotificationAlarmAlertExclamation = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M13.974731449503452,18.000000000480213v2.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999998413,1.999997999999323h-.000004000002264c-1.10456839509061,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-2.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.569335941690042,14.993164062980213l-.937194824217841-1.17138671875c-.425537109375-.531982421871362-.65740966796875-1.19287109375-.65740966796875-1.8741455078125v-1.9476318359375c0-2.611328125-1.671142578125-4.82666015625-4-5.651245117191138v-.348754882808862c0-1.1046142578125-.89544677734375-2-2-2s-2,.8953857421875-2,2v.348754882808862c-2.328857421875.824584960941138-4,3.039916992191138-4,5.651245117191138v1.9476318359375c0,.6812744140625-.23187255859375,1.342163085941138-.65740966796875,1.8741455078125l-.937194824219659,1.17138671875c-.262451171875.328125-.405395507811591.735595703128638-.405395507811591,1.15576171875v.0009765625c0,1.021728515628638.828247070311591,1.85009765625,1.849975585936591,1.85009765625h12.300048828125c1.021728515625,0,1.849975585938409-.828369140621362,1.849975585938409-1.85009765625v-.0009765625c0-.420166015621362-.142944335938409-.82763671875-.405395507813409-1.15576171875Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449503452" y1="14.010000000480431" x2="11.974731449503452" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449503452" y1="11.000000000480213" x2="11.974731449503452" y2="8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell3NotificationAlarmAlertExclamation.displayName = 'Bell3NotificationAlarmAlertExclamation';

module.exports = Bell3NotificationAlarmAlertExclamation;
module.exports.Bell3NotificationAlarmAlertExclamation = Bell3NotificationAlarmAlertExclamation;
module.exports.default = Bell3NotificationAlarmAlertExclamation;
