import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerRaysDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerRaysDotted: ForwardRefExoticComponent<SpinnerRaysDottedProps & RefAttributes<SVGSVGElement>>;

export default SpinnerRaysDotted;
export { SpinnerRaysDotted };
