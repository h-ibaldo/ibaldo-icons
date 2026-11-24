import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCircle: ForwardRefExoticComponent<LockCircleProps & RefAttributes<SVGSVGElement>>;

export default LockCircle;
export { LockCircle };
