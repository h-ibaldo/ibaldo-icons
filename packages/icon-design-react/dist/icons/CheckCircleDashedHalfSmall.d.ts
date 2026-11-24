import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedHalfSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedHalfSmall: ForwardRefExoticComponent<CheckCircleDashedHalfSmallProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedHalfSmall;
export { CheckCircleDashedHalfSmall };
