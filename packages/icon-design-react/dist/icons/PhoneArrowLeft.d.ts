import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowLeft: ForwardRefExoticComponent<PhoneArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowLeft;
export { PhoneArrowLeft };
