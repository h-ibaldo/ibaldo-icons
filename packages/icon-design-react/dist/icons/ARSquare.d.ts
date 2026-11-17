import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ARSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ARSquare: ForwardRefExoticComponent<ARSquareProps & RefAttributes<SVGSVGElement>>;

export default ARSquare;
export { ARSquare };
