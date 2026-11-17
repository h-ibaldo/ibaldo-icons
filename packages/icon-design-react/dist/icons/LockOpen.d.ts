import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpen: ForwardRefExoticComponent<LockOpenProps & RefAttributes<SVGSVGElement>>;

export default LockOpen;
export { LockOpen };
