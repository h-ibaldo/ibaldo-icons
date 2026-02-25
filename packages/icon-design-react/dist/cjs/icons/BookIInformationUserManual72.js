"use strict";

const { forwardRef } = require('react');

const BookIInformationUserManual72 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M22.025268548599342,11.498779303362426l-7,10.5-12-3-.000000888179784-.000001940898983c-.586376851719251-1.281381454300572-.914672186630924-2.665695142539334-.966148104309468-4.073930403752456l-.033851007510748-.926067655348561L10.025268548599342,1.998779303362426l12,3-8,12-12-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.535268548599561" y1="6.988779303362207" x2="13.525268548599342" y2="6.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.525268548599342" y1="11.998779303362426" x2="12.025268548599342" y2="9.498779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookIInformationUserManual72.displayName = 'BookIInformationUserManual72';

module.exports = BookIInformationUserManual72;
module.exports.BookIInformationUserManual72 = BookIInformationUserManual72;
module.exports.default = BookIInformationUserManual72;
