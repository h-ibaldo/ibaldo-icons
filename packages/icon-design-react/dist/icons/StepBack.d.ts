import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepBackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepBack: ForwardRefExoticComponent<StepBackProps & RefAttributes<SVGSVGElement>>;

export default StepBack;
export { StepBack };
