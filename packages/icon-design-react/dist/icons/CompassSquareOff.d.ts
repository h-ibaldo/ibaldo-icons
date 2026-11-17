import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassSquareOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassSquareOff: ForwardRefExoticComponent<CompassSquareOffProps & RefAttributes<SVGSVGElement>>;

export default CompassSquareOff;
export { CompassSquareOff };
