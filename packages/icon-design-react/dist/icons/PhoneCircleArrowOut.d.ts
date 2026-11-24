import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneCircleArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneCircleArrowOut: ForwardRefExoticComponent<PhoneCircleArrowOutProps & RefAttributes<SVGSVGElement>>;

export default PhoneCircleArrowOut;
export { PhoneCircleArrowOut };
