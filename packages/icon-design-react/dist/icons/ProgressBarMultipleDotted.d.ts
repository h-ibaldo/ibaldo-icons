import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarMultipleDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarMultipleDotted: ForwardRefExoticComponent<ProgressBarMultipleDottedProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarMultipleDotted;
export { ProgressBarMultipleDotted };
