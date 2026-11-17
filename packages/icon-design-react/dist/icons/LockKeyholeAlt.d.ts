import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeAlt: ForwardRefExoticComponent<LockKeyholeAltProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeAlt;
export { LockKeyholeAlt };
