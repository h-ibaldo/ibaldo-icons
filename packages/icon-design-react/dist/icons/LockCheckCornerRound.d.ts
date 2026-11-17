import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheckCornerRound: ForwardRefExoticComponent<LockCheckCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default LockCheckCornerRound;
export { LockCheckCornerRound };
