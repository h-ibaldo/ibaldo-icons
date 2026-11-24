import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PercentCircleDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PercentCircleDot: ForwardRefExoticComponent<PercentCircleDotProps & RefAttributes<SVGSVGElement>>;

export default PercentCircleDot;
export { PercentCircleDot };
