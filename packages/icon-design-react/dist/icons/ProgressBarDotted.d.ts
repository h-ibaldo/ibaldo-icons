import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarDotted: ForwardRefExoticComponent<ProgressBarDottedProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarDotted;
export { ProgressBarDotted };
