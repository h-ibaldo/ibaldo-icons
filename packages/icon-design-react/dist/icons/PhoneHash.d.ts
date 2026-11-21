import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneHashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneHash: ForwardRefExoticComponent<PhoneHashProps & RefAttributes<SVGSVGElement>>;

export default PhoneHash;
export { PhoneHash };
