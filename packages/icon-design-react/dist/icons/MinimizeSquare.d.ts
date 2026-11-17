import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinimizeSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinimizeSquare: ForwardRefExoticComponent<MinimizeSquareProps & RefAttributes<SVGSVGElement>>;

export default MinimizeSquare;
export { MinimizeSquare };
