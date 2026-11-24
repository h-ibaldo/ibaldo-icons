import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowDownLeft: ForwardRefExoticComponent<PhoneArrowDownLeftProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowDownLeft;
export { PhoneArrowDownLeft };
