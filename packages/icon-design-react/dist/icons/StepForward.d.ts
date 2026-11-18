import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepForwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepForward: ForwardRefExoticComponent<StepForwardProps & RefAttributes<SVGSVGElement>>;

export default StepForward;
export { StepForward };
