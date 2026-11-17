import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockUnlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockUnlocked: ForwardRefExoticComponent<LockUnlockedProps & RefAttributes<SVGSVGElement>>;

export default LockUnlocked;
export { LockUnlocked };
