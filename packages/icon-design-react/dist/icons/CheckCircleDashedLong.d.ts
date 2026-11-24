import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedLong: ForwardRefExoticComponent<CheckCircleDashedLongProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedLong;
export { CheckCircleDashedLong };
