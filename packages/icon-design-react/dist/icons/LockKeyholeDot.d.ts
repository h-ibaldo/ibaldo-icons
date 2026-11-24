import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeDot: ForwardRefExoticComponent<LockKeyholeDotProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeDot;
export { LockKeyholeDot };
