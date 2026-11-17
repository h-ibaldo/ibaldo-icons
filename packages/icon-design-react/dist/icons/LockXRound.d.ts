import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockXRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockXRound: ForwardRefExoticComponent<LockXRoundProps & RefAttributes<SVGSVGElement>>;

export default LockXRound;
export { LockXRound };
