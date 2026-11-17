import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyeRound: ForwardRefExoticComponent<LockEyeRoundProps & RefAttributes<SVGSVGElement>>;

export default LockEyeRound;
export { LockEyeRound };
