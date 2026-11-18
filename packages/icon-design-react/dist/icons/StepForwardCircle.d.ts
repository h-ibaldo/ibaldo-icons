import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepForwardCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepForwardCircle: ForwardRefExoticComponent<StepForwardCircleProps & RefAttributes<SVGSVGElement>>;

export default StepForwardCircle;
export { StepForwardCircle };
