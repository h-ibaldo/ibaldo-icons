import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheckRound: ForwardRefExoticComponent<LockCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default LockCheckRound;
export { LockCheckRound };
