'use strict';

const { createElement, forwardRef } = require('react');

const FileStarPlain = forwardRef(function FileStarPlain(
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
    createElement('path', {"d":"M16.193 12.298L17.552 15.054L20.593 15.496C20.982 15.552 21.138 16.03 20.856 16.305L18.656 18.45L19.175 21.478C19.242 21.866 18.835 22.161 18.487 21.978L15.767 20.548L13.047 21.978C12.699 22.161 12.293 21.866 12.359 21.478L12.878 18.45L10.678 16.305C10.397 16.03 10.552 15.552 10.941 15.496L13.982 15.054L15.342 12.298C15.516 11.946 16.019 11.946 16.193 12.298Z","key":"0"}),
    createElement('path', {"d":"M20 11.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L9 22.034","key":"1"})
  );
});

FileStarPlain.displayName = 'FileStarPlain';

module.exports = FileStarPlain;
module.exports.FileStarPlain = FileStarPlain;
module.exports.default = FileStarPlain;
