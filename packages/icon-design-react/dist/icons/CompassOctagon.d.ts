import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassOctagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassOctagon: ForwardRefExoticComponent<CompassOctagonProps & RefAttributes<SVGSVGElement>>;

export default CompassOctagon;
export { CompassOctagon };
