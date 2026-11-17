import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearStackSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearStackSquare: ForwardRefExoticComponent<GearStackSquareProps & RefAttributes<SVGSVGElement>>;

export default GearStackSquare;
export { GearStackSquare };
