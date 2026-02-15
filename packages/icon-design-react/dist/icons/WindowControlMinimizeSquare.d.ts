import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlMinimizeSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlMinimizeSquare: ForwardRefExoticComponent<WindowControlMinimizeSquareProps & RefAttributes<SVGSVGElement>>;

export default WindowControlMinimizeSquare;
export { WindowControlMinimizeSquare };
