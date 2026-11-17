import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CapsLockOnArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CapsLockOnArrowUp: ForwardRefExoticComponent<CapsLockOnArrowUpProps & RefAttributes<SVGSVGElement>>;

export default CapsLockOnArrowUp;
export { CapsLockOnArrowUp };
