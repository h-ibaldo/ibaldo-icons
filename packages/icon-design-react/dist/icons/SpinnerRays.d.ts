import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerRays: ForwardRefExoticComponent<SpinnerRaysProps & RefAttributes<SVGSVGElement>>;

export default SpinnerRays;
export { SpinnerRays };
