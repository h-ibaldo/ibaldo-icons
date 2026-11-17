"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1Settings4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="17.000000000183718" cy="17.000000000448381" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000000000183718" y1="17.010000000448599" x2="17.000000000183718" y2="17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000000000183718" y1="12.000000000448381" x2="17.000000000183718" y2="13.500000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000000000183718" y1="20.500000000448381" x2="17.000000000183718" y2="22.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000000183718" y1="17.000000000448381" x2="20.500000000183718" y2="17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.500000000183718" y1="17.000000000448381" x2="12.000000000183718" y2="17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.535533906195269" y1="20.535533906298951" x2="19.474873734392531" y2="19.474873734544417" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.525126265974905" y1="14.525126266351435" x2="13.464466094174895" y2="13.464466094593263" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.464466094332238" y1="20.535533906458113" x2="14.525126266087682" y2="19.474873734655375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.474873734283392" y1="14.525126266237748" x2="20.535533906038836" y2="13.464466094434101" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.000000000183718,22.000000000448381h-6c-1.104569499661011,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000183718" y1="8.000000000448381" x2="22.000000000183718" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000183936" y1="5.000000000448381" x2="5.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000183936" y1="5.000000000448381" x2="8.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000183936" y1="5.000000000448381" x2="11.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1Settings4.displayName = 'ApplicationWindow1Settings4';

module.exports = ApplicationWindow1Settings4;
module.exports.ApplicationWindow1Settings4 = ApplicationWindow1Settings4;
module.exports.default = ApplicationWindow1Settings4;
