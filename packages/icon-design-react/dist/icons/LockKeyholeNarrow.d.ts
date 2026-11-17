import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeNarrow: ForwardRefExoticComponent<LockKeyholeNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeNarrow;
export { LockKeyholeNarrow };
