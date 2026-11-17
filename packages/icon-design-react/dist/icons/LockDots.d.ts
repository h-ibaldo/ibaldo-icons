import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockDots: ForwardRefExoticComponent<LockDotsProps & RefAttributes<SVGSVGElement>>;

export default LockDots;
export { LockDots };
