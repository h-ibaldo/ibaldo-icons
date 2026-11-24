import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowUpRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowUpRightCircle: ForwardRefExoticComponent<PhoneArrowUpRightCircleProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowUpRightCircle;
export { PhoneArrowUpRightCircle };
