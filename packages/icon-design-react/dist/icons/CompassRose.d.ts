import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassRoseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassRose: ForwardRefExoticComponent<CompassRoseProps & RefAttributes<SVGSVGElement>>;

export default CompassRose;
export { CompassRose };
