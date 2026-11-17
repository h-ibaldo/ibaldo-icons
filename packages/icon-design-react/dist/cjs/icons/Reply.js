'use strict';

const { createElement, forwardRef } = require('react');

const Reply = forwardRef(function Reply(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M1.999999999419742,9.000000000448381l7.999999999679858-7.000000000361069.000000000190084,4.159057617191138c6.781982421920475.972778320010548,12.000000000300133,6.789916991639984,12.000000000620275,13.840942382270441l.00000000009004,2-1.921752929830291-3.202880859291326c-2.19567871109939-3.659423828019499-5.918579101839896-6.083496093487156-10.078247070609905-6.661132812048891l.000000000170076,3.864013671878638L1.999999999419742,9.000000000448381Z","key":"0"})
  );
});

Reply.displayName = 'Reply';

module.exports = Reply;
module.exports.Reply = Reply;
module.exports.default = Reply;
