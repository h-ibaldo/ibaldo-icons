import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockUnlockedOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockUnlockedOpen: ForwardRefExoticComponent<LockUnlockedOpenProps & RefAttributes<SVGSVGElement>>;

export default LockUnlockedOpen;
export { LockUnlockedOpen };
