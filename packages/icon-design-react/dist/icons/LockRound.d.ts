import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockRound: ForwardRefExoticComponent<LockRoundProps & RefAttributes<SVGSVGElement>>;

export default LockRound;
export { LockRound };
