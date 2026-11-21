import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneUnlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneUnlock: ForwardRefExoticComponent<PhoneUnlockProps & RefAttributes<SVGSVGElement>>;

export default PhoneUnlock;
export { PhoneUnlock };
