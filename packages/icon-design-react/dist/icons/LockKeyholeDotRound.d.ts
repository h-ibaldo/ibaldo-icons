import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeDotRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeDotRound: ForwardRefExoticComponent<LockKeyholeDotRoundProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeDotRound;
export { LockKeyholeDotRound };
