import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedHalf: ForwardRefExoticComponent<CheckCircleDashedHalfProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedHalf;
export { CheckCircleDashedHalf };
