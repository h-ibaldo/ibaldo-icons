import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalWaveConcentric1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalWaveConcentric1: ForwardRefExoticComponent<SignalWaveConcentric1Props & RefAttributes<SVGSVGElement>>;

export default SignalWaveConcentric1;
export { SignalWaveConcentric1 };
