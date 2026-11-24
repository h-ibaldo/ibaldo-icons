import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneCircleArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneCircleArrowIn: ForwardRefExoticComponent<PhoneCircleArrowInProps & RefAttributes<SVGSVGElement>>;

export default PhoneCircleArrowIn;
export { PhoneCircleArrowIn };
