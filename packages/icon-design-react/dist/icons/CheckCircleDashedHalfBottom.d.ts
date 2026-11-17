import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedHalfBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedHalfBottom: ForwardRefExoticComponent<CheckCircleDashedHalfBottomProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedHalfBottom;
export { CheckCircleDashedHalfBottom };
