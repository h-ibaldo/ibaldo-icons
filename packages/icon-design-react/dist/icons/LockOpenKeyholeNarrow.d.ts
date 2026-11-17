import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenKeyholeNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenKeyholeNarrow: ForwardRefExoticComponent<LockOpenKeyholeNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockOpenKeyholeNarrow;
export { LockOpenKeyholeNarrow };
