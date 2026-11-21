import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneChevronUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneChevronUpRight: ForwardRefExoticComponent<PhoneChevronUpRightProps & RefAttributes<SVGSVGElement>>;

export default PhoneChevronUpRight;
export { PhoneChevronUpRight };
