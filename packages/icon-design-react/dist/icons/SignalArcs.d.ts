import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalArcsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalArcs: ForwardRefExoticComponent<SignalArcsProps & RefAttributes<SVGSVGElement>>;

export default SignalArcs;
export { SignalArcs };
