import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressSpinnerDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressSpinnerDotted: ForwardRefExoticComponent<ProgressSpinnerDottedProps & RefAttributes<SVGSVGElement>>;

export default ProgressSpinnerDotted;
export { ProgressSpinnerDotted };
