"use strict";

const { forwardRef } = require('react');

const DownloadArrowDashed = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.974731450025502,2.000000001537956h-.000002000000677c-1.104568388793268,0-1.999997999999323.895429611205145-1.999997999999323,1.999997999999323v.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731450025502" y1="8.000000001537956" x2="1.974731450025502" y2="10.000000001537956" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731450025502" y1="14.000000001537956" x2="1.974731450025502" y2="16.000000001537956" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731450025502,20.000000001537956v.000002000000677c0,1.104568388793268.895429611206055,1.999997999999323,1.999997999999323,1.999997999999323h.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.974731450025502,22.000000001537956h.000002000000677c1.104568388795087,0,1.999997999999323-.895429611206055,1.999997999999323-1.999997999999323v-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450025502" y1="16.000000001537956" x2="21.974731450025502" y2="14.000000001537956" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450025502" y1="10.000000001537956" x2="21.974731450025502" y2="8.000000001537956" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731450025502" y1="2.000000001537956" x2="13.974731450025502" y2="2.000000001446097" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731450025502" y1="2.000000001268745" x2="7.974731450025502" y2="2.000000001179615" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731450025502" y1="22.000000001537956" x2="13.974731450025502" y2="22.000000001446097" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731450025502" y1="22.000000001268745" x2="7.974731450025502" y2="22.000000001179615" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.974731450025502,4.000000001537956v-.000002000000677c0-1.104568388794178-.895429611204236-1.999997999999323-1.999997999999323-1.999997999999323h-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.974731449661704 13.000000001807166 11.974731448721286 16.000000001537956 8.974731449661704 13.000000001268745" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731451276966" y1="8.000000001537956" x2="11.974731448721286" y2="16.000000001537956" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadArrowDashed.displayName = 'DownloadArrowDashed';

module.exports = DownloadArrowDashed;
module.exports.DownloadArrowDashed = DownloadArrowDashed;
module.exports.default = DownloadArrowDashed;
