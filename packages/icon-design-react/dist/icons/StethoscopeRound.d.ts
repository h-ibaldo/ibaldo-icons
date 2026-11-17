import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StethoscopeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StethoscopeRound: ForwardRefExoticComponent<StethoscopeRoundProps & RefAttributes<SVGSVGElement>>;

export default StethoscopeRound;
export { StethoscopeRound };
