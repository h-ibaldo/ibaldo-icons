import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheckCornerRound: ForwardRefExoticComponent<LockOpenCheckCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheckCornerRound;
export { LockOpenCheckCornerRound };
