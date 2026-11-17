import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5SquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Square: ForwardRefExoticComponent<Bell5SquareProps & RefAttributes<SVGSVGElement>>;

export default Bell5Square;
export { Bell5Square };
