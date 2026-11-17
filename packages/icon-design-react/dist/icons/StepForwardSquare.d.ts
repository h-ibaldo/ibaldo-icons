import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StepForwardSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StepForwardSquare: ForwardRefExoticComponent<StepForwardSquareProps & RefAttributes<SVGSVGElement>>;

export default StepForwardSquare;
export { StepForwardSquare };
