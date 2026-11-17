import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CapsLockOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CapsLockOff: ForwardRefExoticComponent<CapsLockOffProps & RefAttributes<SVGSVGElement>>;

export default CapsLockOff;
export { CapsLockOff };
