import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepBackCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepBackCircle: ForwardRefExoticComponent<StepBackCircleProps & RefAttributes<SVGSVGElement>>;

export default StepBackCircle;
export { StepBackCircle };
