import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BadgeDollarBareJagged = forwardRef(function BadgeDollarBareJagged(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M13.066 2.176L14.363 3.668C14.629 3.973 15.039 4.105 15.43 4.012L17.355 3.57C18 3.422 18.629 3.875 18.684 4.535L18.855 6.504C18.891 6.906 19.148 7.254 19.516 7.41L21.34 8.184C21.945 8.441 22.184 9.176 21.844 9.746L20.828 11.438C20.617 11.785 20.617 12.215 20.828 12.559L21.844 14.254C22.184 14.82 21.945 15.559 21.34 15.816L19.516 16.59C19.148 16.746 18.891 17.094 18.855 17.496L18.684 19.465C18.629 20.125 18 20.578 17.355 20.43L15.43 19.988C15.039 19.895 14.629 20.027 14.363 20.332L13.066 21.824C12.637 22.324 11.859 22.324 11.426 21.824L10.129 20.332C9.863 20.027 9.453 19.895 9.063 19.988L7.137 20.43C6.492 20.578 5.863 20.125 5.809 19.465L5.637 17.496C5.602 17.094 5.344 16.746 4.977 16.59L3.156 15.816C2.547 15.559 2.309 14.82 2.648 14.254L3.668 12.559C3.875 12.215 3.875 11.785 3.668 11.438L2.648 9.746C2.309 9.176 2.547 8.441 3.156 8.184L4.977 7.41C5.344 7.254 5.602 6.906 5.637 6.504L5.809 4.535C5.863 3.875 6.492 3.422 7.137 3.57L9.063 4.012C9.453 4.105 9.863 3.973 10.129 3.668L11.426 2.176C11.859 1.676 12.637 1.676 13.066 2.176Z","key":"0"}),
    createElement(Path, {"d":"M14.633 8C14.086 7.395 13.223 7 12.246 7C10.59 7 9.246 8.117 9.246 9.5C9.246 10.883 10.59 12 12.246 12","key":"1"}),
    createElement(Path, {"d":"M9.859 16C10.406 16.605 11.27 17 12.246 17C13.902 17 15.246 15.883 15.246 14.5C15.246 13.117 13.902 12 12.246 12","key":"2"})
  );
});

BadgeDollarBareJagged.displayName = 'BadgeDollarBareJagged';

export default BadgeDollarBareJagged;
export { BadgeDollarBareJagged };
