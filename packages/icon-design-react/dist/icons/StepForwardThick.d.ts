import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepForwardThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepForwardThick: ForwardRefExoticComponent<StepForwardThickProps & RefAttributes<SVGSVGElement>>;

export default StepForwardThick;
export { StepForwardThick };
