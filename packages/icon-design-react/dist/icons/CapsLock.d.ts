import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CapsLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CapsLock: ForwardRefExoticComponent<CapsLockProps & RefAttributes<SVGSVGElement>>;

export default CapsLock;
export { CapsLock };
