import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerDots: ForwardRefExoticComponent<SpinnerDotsProps & RefAttributes<SVGSVGElement>>;

export default SpinnerDots;
export { SpinnerDots };
