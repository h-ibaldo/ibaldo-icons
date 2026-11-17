import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeOpen: ForwardRefExoticComponent<LockKeyholeOpenProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeOpen;
export { LockKeyholeOpen };
