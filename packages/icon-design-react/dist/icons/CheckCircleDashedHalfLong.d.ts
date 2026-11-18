import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedHalfLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedHalfLong: ForwardRefExoticComponent<CheckCircleDashedHalfLongProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedHalfLong;
export { CheckCircleDashedHalfLong };
