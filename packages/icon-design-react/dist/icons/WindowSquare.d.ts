import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSquare: ForwardRefExoticComponent<WindowSquareProps & RefAttributes<SVGSVGElement>>;

export default WindowSquare;
export { WindowSquare };
