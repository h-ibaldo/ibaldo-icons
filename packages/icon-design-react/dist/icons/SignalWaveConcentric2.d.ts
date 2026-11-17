import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalWaveConcentric2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalWaveConcentric2: ForwardRefExoticComponent<SignalWaveConcentric2Props & RefAttributes<SVGSVGElement>>;

export default SignalWaveConcentric2;
export { SignalWaveConcentric2 };
