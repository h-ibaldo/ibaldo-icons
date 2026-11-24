import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarStriped: ForwardRefExoticComponent<ProgressBarStripedProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarStriped;
export { ProgressBarStriped };
