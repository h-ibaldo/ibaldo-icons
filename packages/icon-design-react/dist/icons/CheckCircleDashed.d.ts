import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashed: ForwardRefExoticComponent<CheckCircleDashedProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashed;
export { CheckCircleDashed };
