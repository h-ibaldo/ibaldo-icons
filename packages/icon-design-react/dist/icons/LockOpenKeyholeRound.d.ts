import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenKeyholeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenKeyholeRound: ForwardRefExoticComponent<LockOpenKeyholeRoundProps & RefAttributes<SVGSVGElement>>;

export default LockOpenKeyholeRound;
export { LockOpenKeyholeRound };
