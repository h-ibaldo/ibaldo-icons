import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepBackSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepBackSquare: ForwardRefExoticComponent<StepBackSquareProps & RefAttributes<SVGSVGElement>>;

export default StepBackSquare;
export { StepBackSquare };
