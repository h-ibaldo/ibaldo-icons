import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepBackThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepBackThick: ForwardRefExoticComponent<StepBackThickProps & RefAttributes<SVGSVGElement>>;

export default StepBackThick;
export { StepBackThick };
