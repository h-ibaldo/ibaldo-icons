import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressSpinnerDots1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressSpinnerDots1: ForwardRefExoticComponent<ProgressSpinnerDots1Props & RefAttributes<SVGSVGElement>>;

export default ProgressSpinnerDots1;
export { ProgressSpinnerDots1 };
