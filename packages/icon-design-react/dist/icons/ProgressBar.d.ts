import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBar: ForwardRefExoticComponent<ProgressBarProps & RefAttributes<SVGSVGElement>>;

export default ProgressBar;
export { ProgressBar };
