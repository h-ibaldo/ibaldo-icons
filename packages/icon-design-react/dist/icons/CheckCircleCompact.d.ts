import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleCompact: ForwardRefExoticComponent<CheckCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleCompact;
export { CheckCircleCompact };
