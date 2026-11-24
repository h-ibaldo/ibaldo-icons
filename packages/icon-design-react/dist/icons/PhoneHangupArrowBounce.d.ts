import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneHangupArrowBounceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneHangupArrowBounce: ForwardRefExoticComponent<PhoneHangupArrowBounceProps & RefAttributes<SVGSVGElement>>;

export default PhoneHangupArrowBounce;
export { PhoneHangupArrowBounce };
