import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PercentCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PercentCircle: ForwardRefExoticComponent<PercentCircleProps & RefAttributes<SVGSVGElement>>;

export default PercentCircle;
export { PercentCircle };
