import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowRight: ForwardRefExoticComponent<PhoneArrowRightProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowRight;
export { PhoneArrowRight };
