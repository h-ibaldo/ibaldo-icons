import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassTicksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassTicks: ForwardRefExoticComponent<CompassTicksProps & RefAttributes<SVGSVGElement>>;

export default CompassTicks;
export { CompassTicks };
