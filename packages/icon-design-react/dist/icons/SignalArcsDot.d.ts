import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalArcsDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalArcsDot: ForwardRefExoticComponent<SignalArcsDotProps & RefAttributes<SVGSVGElement>>;

export default SignalArcsDot;
export { SignalArcsDot };
