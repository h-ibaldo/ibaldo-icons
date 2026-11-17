import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheckRound: ForwardRefExoticComponent<LockOpenCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheckRound;
export { LockOpenCheckRound };
