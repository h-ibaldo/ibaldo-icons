import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2SquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Square: ForwardRefExoticComponent<Bell2SquareProps & RefAttributes<SVGSVGElement>>;

export default Bell2Square;
export { Bell2Square };
