import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneX: ForwardRefExoticComponent<PhoneXProps & RefAttributes<SVGSVGElement>>;

export default PhoneX;
export { PhoneX };
