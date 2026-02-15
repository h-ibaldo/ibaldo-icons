"use strict";

const { forwardRef } = require('react');

const PageViewBadgeRousetteNewView1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M8.999999993649908,21.998779299956368H2.999999993639904c-1.104569499650097,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500349903-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1=".999999993639904" y1="7.998779299956368" x2="20.999999993639904" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="19.666687005370477 18.332092288237618 20.999999993649908 16.998779299956368 19.666687005370477 15.665466311675118 19.666687005370477 13.332092288237618 17.333312981930248 13.332092288237618 15.999999993649908 11.998779299956368 14.666687005370477 13.332092288237618 12.333312981930248 13.332092288237618 12.333312981930248 15.665466311675118 10.999999993649908 16.998779299956368 12.333312981930248 18.332092288237618 12.333312981930248 20.665466311675118 14.666687005370477 20.665466311675118 15.999999993649908 21.998779299956368 17.333312981930248 20.665466311675118 19.666687005370477 20.665466311675118 19.666687005370477 18.332092288237618" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.009999993640122" y1="4.998779299956368" x2="3.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.009999993640122" y1="4.998779299956368" x2="6.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.009999993640122" y1="4.998779299956368" x2="9.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewBadgeRousetteNewView1.displayName = 'PageViewBadgeRousetteNewView1';

module.exports = PageViewBadgeRousetteNewView1;
module.exports.PageViewBadgeRousetteNewView1 = PageViewBadgeRousetteNewView1;
module.exports.default = PageViewBadgeRousetteNewView1;
