import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneLock: ForwardRefExoticComponent<PhoneLockProps & RefAttributes<SVGSVGElement>>;

export default PhoneLock;
export { PhoneLock };
