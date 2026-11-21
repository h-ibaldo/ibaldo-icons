import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowUpRight: ForwardRefExoticComponent<PhoneArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowUpRight;
export { PhoneArrowUpRight };
