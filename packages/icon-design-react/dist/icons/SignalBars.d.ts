import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalBars: ForwardRefExoticComponent<SignalBarsProps & RefAttributes<SVGSVGElement>>;

export default SignalBars;
export { SignalBars };
