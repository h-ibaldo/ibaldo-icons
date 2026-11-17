import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopCircle: ForwardRefExoticComponent<StopCircleProps & RefAttributes<SVGSVGElement>>;

export default StopCircle;
export { StopCircle };
