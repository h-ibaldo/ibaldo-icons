import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedQuarter: ForwardRefExoticComponent<CheckCircleDashedQuarterProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedQuarter;
export { CheckCircleDashedQuarter };
