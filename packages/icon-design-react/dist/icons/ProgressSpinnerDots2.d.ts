import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressSpinnerDots2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressSpinnerDots2: ForwardRefExoticComponent<ProgressSpinnerDots2Props & RefAttributes<SVGSVGElement>>;

export default ProgressSpinnerDots2;
export { ProgressSpinnerDots2 };
