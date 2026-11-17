import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeRound: ForwardRefExoticComponent<LockKeyholeRoundProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeRound;
export { LockKeyholeRound };
