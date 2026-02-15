"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1HeartFavorite22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.999999996553925,10.000000000448381v-6c0-1.10456949966192-.895430500338989-2-2-2H3.999999996553925c-1.10456949966192,0-2,.89543050033808-2,2v16c0,1.10456949966283.89543050033808,2,2,2l6-.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.757358274243416,21.414213537364958l-3.585788457247872-3.585788459576179c-1.104568567853676-1.104568568573995-1.104568357235621-2.895428123849342.000000470428859-3.999996432613443l.000004015843842-.000004015842933c1.10456847005571-1.104567951152603,2.895427315593224-1.104567741811479,3.999995527410647.000000467580321l1.000002004087037,1.000002001890607,1.000002226257493-1.000002226916877c1.104568175988788-1.104568176721841,2.895426999541996-1.104568279842169,3.99999530273999-.000000230328624l.000004011903911.000004011903002c1.104568739177921,1.104568485492564,1.104568840830325,2.895428079602425.000000227048076,3.999996690491571l-3.585788255116313,3.585788245719414c-.781048583980009.781048581935465-2.047378490647134.781048530905537-2.82842707335567-.000000052306859Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1HeartFavorite22.displayName = 'ApplicationWindow1HeartFavorite22';

module.exports = ApplicationWindow1HeartFavorite22;
module.exports.ApplicationWindow1HeartFavorite22 = ApplicationWindow1HeartFavorite22;
module.exports.default = ApplicationWindow1HeartFavorite22;
