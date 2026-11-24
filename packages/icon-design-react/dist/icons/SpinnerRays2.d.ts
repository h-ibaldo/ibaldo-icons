import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerRays2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerRays2: ForwardRefExoticComponent<SpinnerRays2Props & RefAttributes<SVGSVGElement>>;

export default SpinnerRays2;
export { SpinnerRays2 };
