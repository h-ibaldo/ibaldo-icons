import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Phone: ForwardRefExoticComponent<PhoneProps & RefAttributes<SVGSVGElement>>;

export default Phone;
export { Phone };
