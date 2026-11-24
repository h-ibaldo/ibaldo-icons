import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowBendUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowBendUp: ForwardRefExoticComponent<PhoneArrowBendUpProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowBendUp;
export { PhoneArrowBendUp };
