import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenRound: ForwardRefExoticComponent<LockOpenRoundProps & RefAttributes<SVGSVGElement>>;

export default LockOpenRound;
export { LockOpenRound };
