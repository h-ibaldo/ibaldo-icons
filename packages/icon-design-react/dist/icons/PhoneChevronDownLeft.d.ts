import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneChevronDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneChevronDownLeft: ForwardRefExoticComponent<PhoneChevronDownLeftProps & RefAttributes<SVGSVGElement>>;

export default PhoneChevronDownLeft;
export { PhoneChevronDownLeft };
